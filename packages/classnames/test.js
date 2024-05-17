import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { classnames } from "./index.js"

describe("classNames", () => {
  it("accepts strings, arrays or objects", () => {
    const testData = [
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
      assert.deepEqual(classnames(...input), output)
    })
  })

  it("handles edge cases", () => {
    const testData = [
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
      {
        input: [undefined],
        output: "",
      },
      {
        input: [[undefined, undefined]],
        output: "",
      },
      {
        input: [[undefined, "foo"]],
        output: "foo",
      },
    ]

    testData.forEach(({ input, output }) => {
      assert.deepEqual(classnames(...input), output)
    })
  })
})
