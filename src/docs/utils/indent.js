/**
 * Tag function that removes initial spaces from code.
 *
 * The code can be indented in the source, while the result will
 * be rendered without leading spaces.
 */

export default function indent (strings) {
  const code = strings[0]

  const rows = code.split('\n')
  rows.shift()
  rows.pop()

  const firstRow = rows[0]
  let indentationLenght = 0

  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow[i] === ' ') {
      indentationLenght++
    } else {
      break
    }
  }

  return rows.map(row => row.substring(indentationLenght)).join('\n')
}
