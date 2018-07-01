import { configure } from '@storybook/react'

import { setOptions } from '@storybook/addon-options'

import 'bulma/css/bulma.css'

import { name } from '../package.json'

setOptions({
  name,
  url: `https://npmjs.org/package/${name}`
})

function loadStories () {
  require('../src/columns/stories.js')
  require('../src/components/stories.js')
  require('../src/elements/stories.js')
  require('../src/form/stories.js')
  require('../src/layout/stories.js')
}

configure(loadStories, module)
