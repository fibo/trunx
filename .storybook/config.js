import { configure } from '@storybook/react'

function loadStories () {
  require('../src/elements/Button/Button.stories.js')
}

configure(loadStories, module)
