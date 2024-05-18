import assert from "node:assert/strict"
import { test } from "node:test"
import { BulmaClass } from "./bulma.js"
import { columnClass, ColumnClassArg } from "./columns.js"

test("columnClass", () => {
  const testData: Array<{
    input: ColumnClassArg
    output: BulmaClass[]
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
        size: { desktop: 6, tablet: "two-thirds" },
      },
      output: ["is-6-desktop", "is-two-thirds-tablet"],
    },
  ]

  testData.forEach(({ input, output }) => {
    assert.deepEqual(
      columnClass(input).split(" ").sort(),
      ["column", ...output].sort()
    )
  })
})
