import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Column from './Column'
import Columns from './Columns'

storiesOf('Columns', module)
  .add('Basics', () => (
    <Column>First Column</Column>
  ))
  .add('Sizes', () => (
    <Fragment>
      <Columns>
        <Column isFourFifths>isFourFifths</Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>
    </Fragment>
  ))
