import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Button</Button>
  ))
