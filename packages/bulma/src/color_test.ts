import assert from "node:assert/strict"
import { test } from "node:test"
import { ColorClass, MainColor, ShadeColor, colorClass } from "./color.js"

test("colorClass", () => {
  const testData: Array<{
    input: MainColor | ShadeColor | undefined
    output: ColorClass | undefined
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
