const assert = require('assert')

const { version, dependencies } = require('../package.json')

const trunxMajorVersion = version.split('.')[0]
const bulmaMajorVersion = dependencies.bulma.substring(1).split('.')[0]

assert.strict.equal(bulmaMajorVersion, trunxMajorVersion, 'Bulma and Trunx major versions are the same')
