import { configure } from '@storybook/react'

import { setOptions } from '@storybook/addon-options'

import 'bulma/css/bulma.css'

import { name, homepage } from '../package.json'

setOptions({
  name,
  url: homepage
})

function loadStories () {
  require('../src/columns/stories.js')
  require('../src/elements/stories.js')
}

configure(loadStories, module)
