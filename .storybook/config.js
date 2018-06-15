import { configure } from '@storybook/react'

import 'bulma/css/bulma.css'

function loadStories () {
  require('../src/elements/stories.js')
}

configure(loadStories, module)
