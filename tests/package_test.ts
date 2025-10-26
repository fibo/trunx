import { strict as assert } from "node:assert"
import { test } from "node:test"
import read from "read-file-utf8"

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
