import assert from "node:assert/strict"
import { test } from "node:test"
import { BoolClass, BoolClasslistArg, boolClasslist } from "./bool.js"

test("boolClass", () => {
  const testData: Array<{
    input: BoolClasslistArg
    output: Array<BoolClass>
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
      output: ["is-active"],
    },
    {
      input: { hasShadow: true, isBordered: true },
      output: ["has-shadow", "is-bordered"],
    },
  ]

  testData.forEach(({ input, output }) => {
    assert.deepEqual(boolClasslist(input), output)
  })
})
