import React from 'react'

import {
  Column,
  Columns,
  Container,
  Content,
  Control,
  Field,
  Section,
  Subtitle,
  Textarea,
  Title,
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function FormTextarea() {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Textarea</Title>

            <Subtitle>
              The multiline <b>textarea</b> and its variations
            </Subtitle>

            <hr />

            <Columns>
              <Column isHalf>
                <Textarea placeholder='e.g. Hello world' />
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Textarea placeholder='e.g. Hello world' />
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              You can set the height of the textarea using the <code>rows</code>{' '}
              prop which sets the homonym HTML attribute.
            </p>

            <Columns>
              <Column isHalf>
                <Textarea placeholder='10 lines of textarea' rows='10' />
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Textarea placeholder='10 lines of textarea' rows='10' />
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>Colors</Title>

            <Columns>
              <Column isHalf>
                <Field>
                  <Control>
                    <Textarea isPrimary placeholder='Primary textarea' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Textarea isInfo placeholder='Info textarea' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Textarea isSuccess placeholder='Success textarea' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Textarea isWarning placeholder='Warning textarea' />
                  </Control>
                </Field>

                <Field>
                  <Control>
                    <Textarea isDanger placeholder='Danger textarea' />
                  </Control>
                </Field>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Field>
                      <Control>
                        <Textarea isPrimary placeholder='Primary textarea' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Textarea isInfo placeholder='Info textarea' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Textarea isSuccess placeholder='Success textarea' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Textarea isWarning placeholder='Warning textarea' />
                      </Control>
                    </Field>

                    <Field>
                      <Control>
                        <Textarea isDanger placeholder='Danger textarea' />
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
