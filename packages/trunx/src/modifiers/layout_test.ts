import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { FlexModifierProps, flexClassNames } from "./layout.js"

describe("flexClassNames", () => {
  it("works", () => {
    const testData: Array<{
      input: FlexModifierProps
      output: string
    }> = [
      {
        input: {},
        output: "is-flex",
      },
      {
        input: { direction: "column-reverse" },
        output: "is-flex is-flex-direction-column-reverse",
      },
      {
        input: { direction: "column-reverse", grow: 1 },
        output: "is-flex is-flex-direction-column-reverse is-flex-grow-1",
      },
    ]

    testData.forEach(({ input, output }) => {
      assert.deepEqual(flexClassNames(input), output)
    })
  })
})
