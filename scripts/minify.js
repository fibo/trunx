import { readFile, writeFile } from "node:fs/promises"

const classnamesPathname = "./dist/classnames.js"
const componentsPathname = "./dist/react.js"

const originalClassnames = await readFile(classnamesPathname, "utf8")
const originalComponents = await readFile(componentsPathname, "utf8")

const minifiedClassnames = originalClassnames
  .replace(/\s+/g, " ")
  .replace(/ => /g, "=>")
  .replace(/ \./g, ".")
  .replace(/, /g, ",")
  .replace(/ \? /g, "?")
  .replace(/ \}/g, "}")
  .replace(/\{ /g, "{")
  .replace(/ : /g, ":")
  .replace(/ \=/g, "=")
  .replace(/\= /g, "=")
  .replace(/; /g, ";")
  .replace(/ &&/g, "&&")
  .replace(/&& /g, "&&")
  .replace(/if \(/g, "if(")
  .replace(/\) return/g, ")return")

const minifiedComponents = originalComponents
  .replace(/\{\n/g, "{")
  .replace(/,\s+/g, ",")
  .replace(/\s=>\s/g, "=>")
  .replace(/\{\s+/g, "{")
  .replace(/\s+\}/g, "}")
  .replace(/\s+:/g, ":")
  .replace(/:\s+/g, ":")
  .replace(/\s\=/g, "=")
  .replace(/\=\s/g, "=")
  .replace(/\s\?\s/g, "?")
  .replace(/children:children/g, "children")

await writeFile(classnamesPathname, minifiedClassnames)
await writeFile(componentsPathname, minifiedComponents)
