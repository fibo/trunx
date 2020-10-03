import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Button,
  Checkbox,
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Label,
  Help,
  Input,
  Radio,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function FormGeneral () {
  return (
    <>
      <Nav />

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

            <ul>
              <li>
                <code>Input</code>
              </li>

              <li>
                <code>Label</code>
              </li>

              <li>
                <code>Textarea</code>
              </li>

              <li>
                <code>Select</code>
              </li>

              <li>
                <code>Checkbox</code>
              </li>

              <li>
                <code>Radio</code>
              </li>

              <li>
                <code>Button</code>
              </li>

              <li>
                <code>Help</code>
              </li>
            </ul>

            <p>
              Each of them should be wrapped in a <code>Control</code> component.
              When combining several controls in a <b>form</b>, use the <code>Field</code> component as a <b>container</b>, to keep the spacing consistent.
            </p>

            <Columns>
              <Column isHalf>
                <Field>
                  <Label>Name</Label>

                  <Control>
                    <Input type='text' placeholder='Text input' />
                  </Control>
                </Field>

                <Field>
                  <Label>Username</Label>

                  <Control>
                    <Input isSuccess type='text' placeholder='Text input' defaultValue='trunx' />

                    <Help isSuccess>
                      This username is available
                    </Help>
                  </Control>
                </Field>

                <Field>
                  <Label>Email</Label>

                  <Control>
                    <Input isDanger type='email' placeholder='Email input' defaultValue='hello@' />

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

                <Field>
                  <Control>
                    <Radio name='question'>
                      Yes
                    </Radio>

                    <Radio name='question'>
                      No
                    </Radio>
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
                    <Field>
                     <Label>Name</Label>

                      <Control>
                        <Input type='text' placeholder='Text input' />
                      </Control>
                    </Field>

                    <Field>
                     <Label>Username</Label>

                      <Control>
                        <Input isSuccess type='text' placeholder='Text input' defaultValue='trunx' />

                        <Help isSuccess>
                          This username is available
                        </Help>
                      </Control>
                    </Field>

                    <Field>
                     <Label>Email</Label>

                      <Control>
                        <Input isDanger type='email' placeholder='Email input' defaultValue='hello@' />

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
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Form field
            </Title>

            <p>
              The <code>Field</code> component is a simple container for:
            </p>

            <ul>
              <li>
                a text <code>Label</code>
              </li>

              <li>
                a form <code>Control</code>
              </li>

              <li>
                an otional <code>Help</code> text
              </li>
            </ul>

            <Columns>
              <Column isHalf>
                <Field>
                  <Label>Label</Label>

                  <Control>
                    <Input type='text' placeholder='Text input' />
                  </Control>

                  <Help>This is a help text</Help>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Label>Label</Label>

                      <Control>
                        <Input type='text' placeholder='Text input' />
                      </Control>

                      <Help>This is a help text</Help>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              This container allows form fields to be <b>spaced consistently</b>.
            </p>

            <Columns>
              <Column isHalf>
                <Field>
                  <Label>Name</Label>

                  <Control>
                    <Input type='text' placeholder='e.g Alex Smith' />
                  </Control>
                </Field>

                <Field>
                  <Label>Email</Label>

                  <Control>
                    <Input type='password' placeholder='e.g. alexsmith@gmail.com' />
                  </Control>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Label>Name</Label>

                      <Control>
                        <Input type='text' placeholder='e.g Alex Smith' />
                      </Control>
                    </Field>

                    <Field>
                      <Label>Email</Label>

                      <Control>
                        <Input type='password' placeholder='e.g. alexsmith@gmail.com' />
                      </Control>
                    </Field>
                  `}
                </Code>
              </Column>
            </Columns>
          </Content>
        </Container>
      </Section>
    </>
  )
}
