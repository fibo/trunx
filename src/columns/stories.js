import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Column from './Column'
import Columns from './Columns'
import Notification from '../elements/Notification'

storiesOf('Columns', module)
  .add('Basics', () => (
    <Columns>
      <Column>
        <Notification isPrimary>First Column</Notification>
      </Column>
      <Column>
        <Notification isPrimary>Second Column</Notification>
      </Column>
      <Column>
        <Notification isPrimary>Third Column</Notification>
      </Column>
      <Column>
        <Notification isPrimary>Fourth Column</Notification>
      </Column>
    </Columns>
  ))
  .add('Sizes', () => (
    <Fragment>
      <Columns>
        <Column isFourFifths>
          <Notification isPrimary><code>isFourFifths</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isThreeQuarters>
          <Notification isPrimary><code>isThreeQuarters</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isTwoThirds>
          <Notification isPrimary><code>isTwoThirds</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isThreeFifths>
          <Notification isPrimary><code>isThreeFifths</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isHalf>
          <Notification isPrimary><code>isHalf</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isTwoFifths>
          <Notification isPrimary><code>isTwoFifths</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isOneThird>
          <Notification isPrimary><code>isOneThird</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isOneQuarter>
          <Notification isPrimary><code>isOneQuarter</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>

      <Columns>
        <Column isOneFifth>
          <Notification isPrimary><code>isOneFifth</code></Notification>
        </Column>
        <Column>Auto</Column>
        <Column>Auto</Column>
      </Columns>
    </Fragment>
  ))
  .add('Responsiveness', () => (
    <Fragment>
      <Columns isMobile>
        <Column>
          <Notification isPrimary>1</Notification>
        </Column>
        <Column>
          <Notification isPrimary>2</Notification>
        </Column>
        <Column>
          <Notification isPrimary>3</Notification>
        </Column>
        <Column>
          <Notification isPrimary>4</Notification>
        </Column>
      </Columns>
      <Columns isDesktop>
        <Column>
          <Notification isPrimary>1</Notification>
        </Column>
        <Column>
          <Notification isPrimary>2</Notification>
        </Column>
        <Column>
          <Notification isPrimary>3</Notification>
        </Column>
        <Column>
          <Notification isPrimary>4</Notification>
        </Column>
      </Columns>
    </Fragment>
  ))
