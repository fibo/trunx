import assert from "node:assert/strict"
import { describe, it } from "node:test"
import pkg from "../package.json" assert { type: "json" }

describe("trunx version", () => {
  const { dependencies, version } = pkg

  it("has same major version as Bulma", () => {
    const trunxMajorVersion = version.split(".")[0]
    const bulmaMajorVersion = dependencies.bulma.split(".")[0]

    assert.equal(
      bulmaMajorVersion,
      trunxMajorVersion,
      "Bulma and Trunx major versions are not the same"
    )
  })
})
