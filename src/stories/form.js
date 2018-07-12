import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../component/Button'
import Checkbox from '../component/Checkbox'
import Container from '../component/Container'
import Content from '../component/Content'
import Control from '../component/Control'
import Field from '../component/Field'
import Input from '../component/Input'
import Subtitle from '../component/Subtitle'
import Title from '../component/Title'

import Meta from './Meta'

storiesOf('Form', module)
  .add('General', () => (
    <Container>
      <Content>
        <Title is2>
          Form controls
        </Title>

        <Subtitle>
          All generic <b>form controls</b>, designed for consistency
        </Subtitle>

        <Control>
          <Input type='text' placeHolder='Text input' />
        </Control>
        <Control>
          <Button isPrimary>Submit</Button>
        </Control>

      </Content>
    </Container>
  ))
  .add('Input', () => (
    <Container>
      <Content>
        <Title is2>
          Input
        </Title>

        <Subtitle>
           The <b>text input</b> and its variations
        </Subtitle>

        <Meta colors sizes />

        <hr />

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

      </Content>
    </Container>
  ))
  .add('Checkbox', () => (
    <Container>
      <Content>
        <Title is2>
          Input
        </Title>

        <Subtitle>
          The 2-state <b>checkbox</b> in its native format
        </Subtitle>

        <Meta />

        <hr />

        <Checkbox>Remember me</Checkbox>

        <Checkbox>
          I agree to the <a href='#'>terms and conditions</a>
        </Checkbox>

        <Checkbox disabled>Save my preferences</Checkbox>

      </Content>
    </Container>
  ))
