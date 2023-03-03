import assert from 'node:assert/strict'
import pkg from '../package.json' assert { type: 'json' }

function testMajorVersion() {
  const { dependencies, version } = pkg

  const trunxMajorVersion = version.split('.')[0]
  const bulmaMajorVersion = dependencies.bulma.substring(1).split('.')[0]

  assert.equal(bulmaMajorVersion, trunxMajorVersion, 'Bulma and Trunx major versions are the same')
}

testMajorVersion()
