import assert from "node:assert/strict"
import {test} from "node:test"
import {BoolClassArg, boolClass} from "./bool.js"

test("boolClass", () => {
  const testData: Array<{
    input: BoolClassArg
    output: string[]
  }> = [
      {
        input: {},
        output: [],
      },
      {
        input: {isActive: true},
        output: ["is-active"],
      },
      {
        input: {isActive: true, isFocused: false},
        output: ["is-active", ""],
      },
      {
        input: {hasShadow: true, isBordered: true},
        output: ["has-shadow", "is-bordered"],
      },
    ]

  testData.forEach(({input, output}) => {
    assert.deepEqual(boolClass(input), output)
  })
})
