import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from './Button.jsx'
import Notification from './Notification'

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

storiesOf('elements/Notification', module)
  .add('basics', () => (
    <Notification>Notification</Notification>
  ))
  .add('colors', () => (
    <Fragment>
      <Notification white>White</Notification>
      <Notification light>Light</Notification>
      <Notification dark>Dark</Notification>
      <Notification black>Black</Notification>
      <Notification text>Text</Notification>
    </Fragment>
  ))
