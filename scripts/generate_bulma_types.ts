import { readFile, writeFile } from "node:fs/promises"
import { join } from "node:path"
import postcss from "postcss"
import selectorParser from "postcss-selector-parser"

const inputPath = join("node_modules", "bulma", "css", "bulma.css")
const outputPath = join("src", "Bulma.ts")

const css = await readFile(inputPath, "utf-8")
const root = postcss.parse(css)

const classSet = new Set<string>()

// Add classes that we are not able to extract.
classSet.add("is-max-desktop").add("is-arrowless")

const parser = selectorParser((selectors) => {
  selectors.each((selector) => {
    if (selector.type != "selector") return
    for (const node of selector.nodes) {
      if (node.type == "class") {
        classSet.add(node.value)
      } else if (node.type == "pseudo") {
        if (node.value == ":not") {
          // TODO extract the classes inside :not()
        }
      }
    }
  })
})

root.walkRules((rule) => {
  parser.processSync(rule, { lossless: true })
})

root.walkAtRules((rule) => {
  if (rule.name != "media") return
  rule.walkRules((mediaRule) => {
    parser.processSync(mediaRule, { lossless: true })
  })
})

const classList = Array.from(classSet).sort((a, b) => a.localeCompare(b))

await writeFile(
  outputPath,
  `// This file is auto-generated
export type Bulma =
${classList.map((c) => `  | "${c}"`).join("\n")}
`
)
