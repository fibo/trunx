import assert from "node:assert/strict"
import { test } from "node:test"
import { BooleanModifierProps, modifier } from "./boolean.js"

test("modifier", () => {
  const testData: Array<{
    input: BooleanModifierProps
    output: string[]
  }> = [
    {
      input: {},
      output: [],
    },
    {
      input: { isActive: true },
      output: ["is-active"],
    },
    {
      input: { isActive: true, isFocused: false },
      output: ["is-active", ""],
    },
    {
      input: { hasShadow: true, isBordered: true },
      output: ["has-shadow", "is-bordered"],
    },
  ]

  testData.forEach(({ input, output }) => {
    assert.deepEqual(modifier(input), output)
  })
})
