"use client"
import hljs from "highlight.js"
import { FC, useEffect, useRef } from "react"
import { bulma } from "trunx"

hljs.configure({ ignoreUnescapedHTML: true })

type Props = {
  language?: "html" | "jsx" | "scss"
  snippet: string
}

export const Code: FC<Props> = ({ language = "jsx", snippet }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    hljs.highlightElement(ref.current)
  }, [ref])

  return (
    <div className={bulma("mb-5")}>
      <pre ref={ref} className={`language-${language}`}>
        <code>{indent(snippet)}</code>
      </pre>
    </div>
  )
}

const indent = (code: string) => {
  const rows = code.split("\n")
  rows.shift()
  rows.pop()

  const firstRow = rows[0]
  if (!firstRow) return ""
  let indentationLenght = 0

  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow[i] === " ") {
      indentationLenght++
    } else {
      break
    }
  }

  return rows.map((row) => row.substring(indentationLenght)).join("\n")
}
