"use client"
import hljs from "highlight.js"
import { FC, useEffect, useRef } from "react"
import { bulma } from "trunx"

type Props = {
  snippet: string
}

function indent(code: string) {
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

export const Code: FC<Props> = ({ snippet }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    hljs.highlightElement(ref.current)
  }, [ref])

  return (
    <div className={bulma("mb-5")}>
      <pre ref={ref}>
        <code>{indent(snippet)}</code>
      </pre>
    </div>
  )
}
