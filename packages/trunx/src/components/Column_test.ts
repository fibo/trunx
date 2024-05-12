import assert from "node:assert/strict"
import { test } from "node:test"
import { BulmaClassname } from "../bulma.js"
import { columnClassNames, ColumnProps } from "./Column.js"

test("columnClassNames", () => {
  const testData: Array<{
    input: ColumnProps
    output: BulmaClassname[]
  }> = [
    {
      input: {
        isNarrow: true,
      },
      output: ["is-narrow"],
    },
    {
      input: {
        isNarrow: { mobile: false, tablet: true },
      },
      output: ["is-narrow-tablet"],
    },
    {
      input: {
        offset: 6,
      },
      output: ["is-offset-6"],
    },
    {
      input: {
        offset: "three-quarters",
      },
      output: ["is-offset-three-quarters"],
    },
    {
      input: {
        size: 6,
      },
      output: ["is-6"],
    },
    {
      input: {
        size: "three-quarters",
      },
      output: ["is-three-quarters"],
    },
    {
      input: {
        size: { desktop: 6, mobile: "full", tablet: "two-thirds" },
      },
      output: ["is-6-desktop", "is-full-mobile", "is-two-thirds-tablet"],
    },
  ]

  testData.forEach(({ input, output }) => {
    assert.deepEqual(
      columnClassNames(input).split(" ").sort(),
      ["column", ...output].sort()
    )
  })
})
