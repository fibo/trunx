import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('elements/Button', module)
  .add('basics', () => (
    <Button>Button</Button>
  ))
  .add('colors', () => (
    <Fragment>
      <Button white>White</Button>
      <Button light>Light</Button>
      <Button dark>Dark</Button>
      <Button black>Black</Button>
      <Button text>Text</Button>
    </Fragment>
  ))
