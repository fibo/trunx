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
    input: [null],
    output: "",
  },
  {
    input: [undefined],
    output: "",
  },
  {
    input: [[]],
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
    input: [[undefined, "a"]],
    output: "a",
  },
  {
    input: ["a", null, undefined, "b"],
    output: "a b",
  },
  {
    input: ["a"],
    output: "a",
  },
  {
    input: ["a", "b"],
    output: "a b",
  },
  {
    input: ["a", null, undefined, "b"],
    output: "a b",
  },
  {
    input: [{ a: true }],
    output: "a",
  },
  {
    input: ["", "b", {}, ""],
    output: "b",
  },
  {
    input: [{ a: 1 }],
    output: "a",
  },
  {
    input: [{ a: 0 }],
    output: "",
  },
  {
    input: [{ a: true, b: false, c: 0, d: null, e: undefined, f: 1 }],
    output: "a f",
  },
  {
    input: [{ a: "x", b: undefined, c: 1 }],
    output: "a c",
  },
  {
    input: [["a"]],
    output: "a",
  },
  {
    input: [["a", "b", ""]],
    output: "a b",
  },
  {
    input: [["a", "b"], "c"],
    output: "a b c",
  },
  {
    input: ["a", ["b", "c"]],
    output: "a b c",
  },
  {
    input: ["", "a", ""],
    output: "a",
  },
  {
    input: [undefined, "a", undefined],
    output: "a",
  },
  {
    input: ["a", { b: true }],
    output: "a b",
  },
  {
    input: ["a", { b: true, c: false }],
    output: "a b",
  },
  {
    input: ["a", { b: true, c: false }, { c: true, d: false }],
    output: "a b c",
  },
  {
    input: ["a", ["b", ["c", { d: true }]]],
    output: "a b c d",
  },
]

test("classNames", () => {
  testData.forEach(({ input, output }) =>
    assert.deepEqual(classnames(...input), output),
  )
})
