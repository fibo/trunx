import assert from 'assert'
import path from 'path'
import readFile from 'read-file-utf8'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const packageJsonFilepath = path.join(__dirname, '..', 'package.json')

async function testBulmaVersion () {
  const { dependencies, version } = await readFile(packageJsonFilepath).then(JSON.parse)

  const trunxMajorVersion = version.split('.')[0]
  const bulmaMajorVersion = dependencies.bulma.substring(1).split('.')[0]

  assert.strict.equal(bulmaMajorVersion, trunxMajorVersion, 'Bulma and Trunx major versions are the same')
}

testBulmaVersion()
