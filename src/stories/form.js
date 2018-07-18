import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../component/Button'
import Checkbox from '../component/Checkbox'
import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import Control from '../component/Control'
import Field from '../component/Field'
import Help from '../component/Help'
import Input from '../component/Input'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'
import Meta from './Meta'

storiesOf('Form', module)
  .add('General', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Form controls
          </Title>

          <Subtitle>
            All generic <b>form controls</b>, designed for consistency
          </Subtitle>

          <hr />

          <p>
            The following form controls <b>components</b> are supported:
          </p>

          <ul />

          <p>
            Each of them should be wrapped in a <code>Control</code> component.
  When combining several controls in a <b>form</b>, use the <code>Field</code> component as a <b>container</b>, to keep the spacing consistent.
          </p>

          <Columns>
            <Column isHalf>
              <Field label='Name'>
                <Control>
                  <Input type='text' placeHolder='Text input' />
                </Control>
              </Field>

              <Field label='Username'>
                <Control>
                  <Input isSuccess type='text' placeHolder='Text input' value='trunx' />

                  <Help isSuccess>
                    This username is available
                  </Help>
                </Control>
              </Field>

              <Field label='Email'>
                <Control>
                  <Input isDanger type='email' placeHolder='Email input' value='hello@' />

                  <Help isDanger>
                    This email is invalid
                  </Help>
                </Control>
              </Field>

              <Field>
                <Control>
                  <Checkbox>
                    I agree to the <a href='#'>terms and conditions</a>
                  </Checkbox>
                </Control>
              </Field>

              <Field isGrouped>
                <Control>
                  <Button isLink>Submit</Button>
                </Control>

                <Control>
                  <Button isText>Cancel</Button>
                </Control>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Field label='Name'>
                    <Control>
                      <Input type='text' placeHolder='Text input' />
                    </Control>
                  </Field>

                  <Field label='Username'>
                    <Control>
                      <Input isSuccess type='text' placeHolder='Text input' value='trunx' />

                      <Help isSuccess>
                        This username is available
                      </Help>
                    </Control>
                  </Field>

                  <Field label='Email'>
                    <Control>
                      <Input isDanger type='email' placeHolder='Email input' value='hello@'/>

                      <Help isDanger>
                        This email is invalid
                      </Help>
                    </Control>
                  </Field>

                  <Field>
                    <Control>
                      <Checkbox>
                        I agree to the <a href="#">terms and conditions</a>
                      </Checkbox>
                    </Control>
                  </Field>

                  <Field isGrouped>
                    <Control>
                      <Button isLink>Submit</Button>
                    </Control>

                    <Control>
                      <Button isText>Cancel</Button>
                    </Control>
                  </Field>
                `}
              </Code>
            </Column>
          </Columns>

        </Content>
      </Container>
    </Section>
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

        <p>
          The following <b>modifiers</b> are supported:
        </p>

        <ul>
          <li>
            color
          </li>

          <li>
            size
          </li>

          <li>
            state
          </li>
        </ul>

        <p>
          The following <b>type props</b> are supported:
        </p>

        <ul>
          <li>
            <code>
              {'type="text"'}
            </code>
          </li>

          <li>
            <code>
              {'type="password"'}
            </code>
          </li>

          <li>
            <code>
              {'type="email"'}
            </code>
          </li>

          <li>
            <code>
              {'type="tel"'}
            </code>
          </li>
        </ul>

        <Title is4>
          Colors
        </Title>

        <Columns>
          <Column isHalf>
            <Field>
              <Control>
                <Input isPrimary type='text' placeHolder='Primary input' />
              </Control>
            </Field>

            <Field>
              <Control>
                <Input isInfo type='text' placeHolder='Info input' />
              </Control>
            </Field>

            <Field>
              <Control>
                <Input isSuccess type='text' placeHolder='Success input' />
              </Control>
            </Field>

            <Field>
              <Control>
                <Input isWarning type='text' placeHolder='Warning input' />
              </Control>
            </Field>

            <Field>
              <Control>
                <Input isDanger type='text' placeHolder='Danger input' />
              </Control>
            </Field>
          </Column>

          <Column isHalf>
            <Code language='jsx'>
              {indent`
                <Field>
                  <Control>
                    <Input isPrimary type='text' placeHolder='Primary input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isInfo type='text' placeHolder='Info input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isSuccess type='text' placeHolder='Success input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isWarning type='text' placeHolder='Warning input' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Input isDanger type='text' placeHolder='Danger input' />
                  </Control>
                </Field>
              `}
            </Code>
          </Column>
        </Columns>
      </Content>
    </Container>
  ))
  .add('Checkbox', () => (
    <Container>
      <Content>
        <Title is2>
          Checkbox
        </Title>

        <Subtitle>
          The 2-state <b>checkbox</b> in its native format
        </Subtitle>

        <Meta />

        <hr />

        <p>
          The <code>Checkbox</code> component is a simple wrapper around the <code>{'<input type="checkbox">'}</code> HTML element. It is intentionally not styled, to preserve cross-browser compatibility and the user experience.
        </p>

        <Columns>
          <Column isHalf>
            <Checkbox>Remember me</Checkbox>
          </Column>

          <Column isHalf>
            <Code language='jsx'>
              {indent`
                <Checkbox>Remember me</Checkbox>
              `}
            </Code>
          </Column>
        </Columns>

        <Checkbox>
          I agree to the <a href='#'>terms and conditions</a>
        </Checkbox>

        <p>
          You can add <b>links</b> to your checkbox, or even <b>disable</b> it.
        </p>

        <Columns>
          <Column isHalf>
            <Checkbox disabled>Save my preferences</Checkbox>
          </Column>

          <Column isHalf>
            <Code language='jsx'>
              {indent`
                <Checkbox disabled>Save my preferences</Checkbox>
              `}
            </Code>
          </Column>
        </Columns>
      </Content>
    </Container>
  ))
