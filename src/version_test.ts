import * as assert from "node:assert/strict"
import read from "read-file-utf8"
import { test } from "node:test"

test("trunx version", async () => {
  const { dependencies, version } = await read<{
    dependencies: {
      bulma: string
    }
    version: string
  }>("package.json")

  const trunxMajorVersion = version.split(".")[0]
  const bulmaMajorVersion = dependencies.bulma.split(".")[0]

  assert.equal(bulmaMajorVersion, trunxMajorVersion)
})
