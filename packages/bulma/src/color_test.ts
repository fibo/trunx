import assert from "node:assert/strict"
import { test } from "node:test"
import { colorClass, MainColor, ShadeColor } from "./color.js"

test("colorClass", () => {
  const testData: Array<{
    input: MainColor | ShadeColor | undefined
    output: string | undefined
  }> = [
    {
      input: undefined,
      output: undefined,
    },
    {
      input: "success",
      output: "is-success",
    },
    {
      input: "dark",
      output: "is-dark",
    },
  ]

  testData.forEach(({ input, output }) => {
    assert.deepEqual(colorClass(input), output)
  })
})
