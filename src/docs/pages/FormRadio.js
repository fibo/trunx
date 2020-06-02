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
  Textarea,
  Title
} from '../../../index.js'

export default function FormRadio () {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Radio
            </Title>

            <Subtitle>
              The mutually exclusive <b>radio buttons</b>in their native format
            </Subtitle>

            <hr />

            <p>
              The <code>Radio</code> component is a simple wrapper around the <code>&lt;input type="radio"&gt;</code> HTML elements. It is intentionally not styled, to preserve cross-browser compatibility and the user experience.
            </p>

            <p>
              Make sure the linked radio buttons have the <b>same value</b> for their <code>name</code> HTML attribute.
            </p>

            <Columns>
              <Column isHalf>
                <Control>
                  <Radio name='answer'>
                    Yes
                  </Radio>

                  <Radio name='answer'>
                    No
                  </Radio>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Radio name='answer'>
                        Yes
                      </Radio>

                      <Radio name='answer'>
                        No
                      </Radio>
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              You can check a radio button by <b>default</b> by adding the <code>defaultChecked</code> prop.
            </p>

            <Columns>
              <Column isHalf>
                <Control>
                  <Radio name='foobar'>
                    Foo
                  </Radio>

                  <Radio name='foobar' defaultChecked>
                    Bar
                  </Radio>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Radio name='foobar'>
                        Foo
                      </Radio>

                      <Radio name='foobar' defaultChecked>
                        Bar
                      </Radio>
                    </Control>
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              You can disable a radio button by adding the <code>disabled</code> prop.
            </p>

            <Columns>
              <Column isHalf>
                <Control>
                  <Radio name='rvsp'>
                    Going
                  </Radio>

                  <Radio name='rvsp'>
                    Not Going
                  </Radio>

                  <Radio disabled name='rvsp'>
                    Maybe
                  </Radio>
                </Control>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Control>
                      <Radio name='rvsp'>
                        Going
                      </Radio>

                      <Radio name='rvsp'>
                        Not Going
                      </Radio>

                      <Radio disabled name='rvsp'>
                        Maybe
                      </Radio>
                    </Control>
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


