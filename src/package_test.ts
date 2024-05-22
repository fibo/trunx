import * as assert from "node:assert/strict"
import read from "read-file-utf8"
import { test } from "node:test"

test("package.json", async () => {
  const { devDependencies, peerDependencies, version } = await read<{
    devDependencies: {
      bulma: string
    }
    peerDependencies: {
      bulma: string
    }
    version: string
  }>("package.json")

  assert.equal(
    devDependencies.bulma,
    peerDependencies.bulma,
    "bulma in devDependencies does not match bulma in peerDependencies",
  )

  const trunxMajorVersion = version.split(".")[0]
  const bulmaMajorVersion = peerDependencies.bulma.slice(1).split(".")[0]

  assert.equal(
    bulmaMajorVersion,
    trunxMajorVersion,
    "trunx major version must equal bulma major version",
  )
})
