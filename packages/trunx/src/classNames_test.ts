import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { ClassNamesArg, classNames } from "./classNames.js"

describe("classNames", () => {
  it("accepts strings, arrays or objects", () => {
    const testData: Array<{
      input: ClassNamesArg<string>[]
      output: string
    }> = [
      {
        input: ["is-primary"],
        output: "is-primary",
      },
      {
        input: ["is-primary", "is-loading"],
        output: "is-primary is-loading",
      },
      {
        input: [
          {
            "is-primary": true,
          },
        ],
        output: "is-primary",
      },
      {
        input: [["is-primary"]],
        output: "is-primary",
      },
      {
        input: [["is-loading", "is-primary", ""]],
        output: "is-loading is-primary",
      },
      {
        input: ["", "is-primary", ""],
        output: "is-primary",
      },
    ]

    testData.forEach(({ input, output }) => {
      assert.deepEqual(classNames(...input), output)
    })
  })

  it("handles edge cases", () => {
    const testData: Array<{
      input: ClassNamesArg<string>[]
      output: string
    }> = [
      {
        input: [],
        output: "",
      },
      {
        input: [""],
        output: "",
      },
      {
        input: [{}],
        output: "",
      },
      {
        input: ["", [], {}],
        output: "",
      },
      {
        input: ["", "", ""],
        output: "",
      },
      {
        input: [["", "", ""]],
        output: "",
      },
      {
        input: [["", "", ""], "", ""],
        output: "",
      },
      {
        input: [
          ["", "", ""],
          ["", ""],
        ],
        output: "",
      },
      {
        input: ["", { "": true }],
        output: "",
      },
    ]

    testData.forEach(({ input, output }) => {
      assert.deepEqual(classNames(...input), output)
    })
  })
})
