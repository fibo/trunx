import assert from "node:assert/strict"
import { test } from "node:test"
import { BulmaClass } from "./bulma.js"
import { FlexClassArg, flexClass } from "./layout.js"

test("flexClass", () => {
  const testData: Array<{
    input: FlexClassArg
    output: Array<BulmaClass>
  }> = [
    {
      input: {},
      output: ["is-flex"],
    },
    {
      input: { direction: "column-reverse" },
      output: ["is-flex", "is-flex-direction-column-reverse"],
    },
    {
      input: { direction: "column-reverse", grow: 1 },
      output: ["is-flex", "is-flex-direction-column-reverse", "is-flex-grow-1"],
    },
  ]

  testData.forEach(({ input, output }) => {
    assert.deepEqual(flexClass(input), output.join(" "))
  })
})
