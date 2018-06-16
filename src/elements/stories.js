import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from './Button'
import Delete from './Delete'
import Notification from './Notification'

const loremIpsum = () => (
  <Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</Fragment>
)

storiesOf('Elements/Button', module)
  .add('Basics', () => (
    <Button>Button</Button>
  ))
  .add('Colors', () => (
    <Fragment>
      <Button isWhite>White</Button>
      <Button isLight>Light</Button>
      <Button isDark>Dark</Button>
      <Button isBlack>Black</Button>
      <Button isText>Text</Button>
      <Button isPrimary>Primary</Button>
      <Button isLink>Link</Button>
      <Button isInfo>Info</Button>
      <Button isSuccess>Success</Button>
      <Button isWarning>Warning</Button>
      <Button isDanger>Danger</Button>
    </Fragment>
  ))

storiesOf('Elements/Notification', module)
  .add('Basics', () => (
    <Notification>
      <Delete />
      {loremIpsum()}
    </Notification>
  ))
  .add('Colors', () => (
    <Fragment>
      <Notification isPrimary>
        <Delete />
        {loremIpsum()}
      </Notification>
      <Notification isLink>
        <Delete />
        {loremIpsum()}
      </Notification>
      <Notification isInfo>
        <Delete />
        {loremIpsum()}
      </Notification>
      <Notification isSuccess>
        <Delete />
        {loremIpsum()}
      </Notification>
      <Notification isWarning>
        <Delete />
        {loremIpsum()}
      </Notification>
      <Notification isDanger>
        <Delete />
        {loremIpsum()}
      </Notification>
    </Fragment>
  ))
