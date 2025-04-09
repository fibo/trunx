import * as assert from "node:assert/strict"
import read from "read-file-utf8"
import { test } from "node:test"

test("package.json", async () => {
  const pkg = await read<{
    devDependencies: { bulma: string }
    version: string
  }>("package.json")

  const trunxMajorVersion = pkg.version.split(".")[0]
  const bulmaMajorVersion = pkg.devDependencies.bulma.slice(1).split(".")[0]

  assert.equal(
    bulmaMajorVersion,
    trunxMajorVersion,
    "trunx major version must equal bulma major version"
  )
})
