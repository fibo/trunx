import ts from "typescript"
import { dirname, resolve } from "path"
import { writeFileSync } from "fs"
import { fileURLToPath } from "url"

const outputFile = ["// This file is generated"]

const componentExamples = new Map()
// Add some components that has no example but need to be imported.
for (const component of [
  "BreadcrumbItem",
  "CardContent",
  "CardFooter",
  "CardHeader",
  "CardHeaderIcon",
  "CardHeaderTitle",
  "Control",
  "Delete",
  "DropdownDivider",
  "DropdownMenu",
  "DropdownTrigger",
  "FieldBody",
  "FieldLabel",
  "FileIcon",
  "FileLabel",
  "HeroBody",
  "Input",
  "Label",
  "MediaContent",
  "MediaLeft",
  "MediaRight",
  "Menu",
  "ModalBackground",
  "ModalClose",
  "ModalContent",
  "NavbarEnd",
  "NavbarStart",
  "PaginationEllipsis",
  "PaginationLink",
  "PaginationList",
  "PaginationNext",
  "PaginationPrevious",
  "Subtitle",
  "Tab"
])
  componentExamples.set(component, [])

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)))

const sourceFilePath = resolve(rootDir, "src/react.tsx")

const program = ts.createProgram([sourceFilePath], {})
const sourceFile = program.getSourceFile(sourceFilePath)

function extractExamplesFromNode(node) {
  const examples = []
  if (!node.jsDoc) return examples
  for (const jsDoc of node.jsDoc) {
    if (!jsDoc.tags) continue
    for (const tag of jsDoc.tags) {
      if (tag.tagName.text === "example") {
        examples.push(tag.comment)
      }
    }
  }
  return examples
}

function visit(node) {
  const examples = extractExamplesFromNode(node)
  if (examples.length > 0) {
    let componentName = ""
    if (ts.isVariableStatement(node)) {
      const decl = node.declarationList.declarations[0]
      if (ts.isIdentifier(decl.name)) {
        componentName = decl.name.text
      }
    }
    for (const example of examples) {
      if (!componentName) throw new Error("Component name not found")
      if (!componentExamples.has(componentName)) {
        componentExamples.set(componentName, [])
      }

      componentExamples.get(componentName).push(example)
    }
  }
  ts.forEachChild(node, visit)
}

visit(sourceFile)

outputFile.push("import {")

for (const componentName of componentExamples.keys()) {
  outputFile.push(`  ${componentName},`)
}

outputFile.push('} from "../dist/index.js"')

for (const [componentName, examples] of componentExamples.entries()) {
  for (let exampleIndex = 1; exampleIndex <= examples.length; exampleIndex++) {
    const rows = examples[exampleIndex - 1].split("\n")
    const exampleName = `test${componentName}Example${exampleIndex}`
    const hasDescription = !rows[0].startsWith("<")
    if (hasDescription) {
      outputFile.push(`// ${rows[0]}`)
    }
    outputFile.push(`export const ${exampleName} = () => (`)
    const startIndex = hasDescription ? 1 : 0
    for (let j = startIndex; j < rows.length; j++) {
      outputFile.push(`  ${rows[j]}`)
    }
    outputFile.push(")")
  }
}

writeFileSync(
  resolve(rootDir, "tests/components_tsdoc_examples.tsx"),
  outputFile.join("\n"),
  "utf8"
)
