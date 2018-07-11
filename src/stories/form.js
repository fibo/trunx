import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../component/Button'
import Checkbox from '../component/Checkbox'
import Control from '../component/Control'
import Field from '../component/Field'
import Input from '../component/Input'

storiesOf('Form/General', module)
  .add('Form control', () => (
    <Fragment>
      <Control>
        <Input type='text' placeHolder='Text input' />
      </Control>
      <Control>
        <Button isPrimary>Submit</Button>
      </Control>
    </Fragment>
  ))

storiesOf('Form/Input', module)
  .add('Colors', () => (
    <Fragment>
      <Field>
        <Control>
          <Input isPrimary />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input isInfo />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input isSuccess />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input isWarning />
        </Control>
      </Field>
      <Field>
        <Control>
          <Input isDanger />
        </Control>
      </Field>
    </Fragment>
  ))

storiesOf('Form', module)
  .add('Checkbox', () => (
    <Fragment>
      <Checkbox>Remember me</Checkbox>

      <Checkbox>
        I agree to the <a href='#'>terms and conditions</a>
      </Checkbox>

      <Checkbox disabled>Save my preferences</Checkbox>
    </Fragment>
  ))
