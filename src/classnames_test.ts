import * as assert from "node:assert/strict"
import { test } from "node:test"
import { classnames } from "./classnames.js"

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
  {
    input: [undefined, "menu", undefined],
    output: "menu",
  },
  {
    input: ["has-text-centered", { "has-text-primary": true }],
    output: "has-text-centered has-text-primary",
  },
]

test("classNames", () => {
  testData.forEach(({ input, output }) =>
    assert.deepEqual(classnames(...input), output),
  )
})
