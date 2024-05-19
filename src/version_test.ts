import assert from "node:assert/strict"
import { test } from "node:test"
import pkg from "../package.json" assert { type: "json" }

test("trunx version", () => {
  const { dependencies, version } = pkg

  const trunxMajorVersion = version.split(".")[0]
  const bulmaMajorVersion = dependencies.bulma.split(".")[0]

  assert.equal(bulmaMajorVersion, trunxMajorVersion)
})
