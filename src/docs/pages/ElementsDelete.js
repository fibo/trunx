import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  B,
  Column,
  Columns,
  Container,
  Content,
  Delete,
  P,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function ElementsDelete ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Delete
            </Title>

            <Subtitle>
              A versatile <B>delete</B> cross
            </Subtitle>

            <hr />

            <P>
              The <code>Delete</code> component is a stand-alone element that can be used in different contexts.
            </P>

            <P>
              On its own, it's a simple circle with a cross:
            </P>

            <Columns>
              <Column isHalf>
                <Delete aria-label='delete' />
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Delete arial-label='delete' />
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
