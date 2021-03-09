import React from 'react'

import {
  A,
  Column,
  Columns,
  Container,
  Content,
  Delete,
  Message,
  P,
  Section,
  Subtitle,
  Title,
} from '../../../component/index'
import { Code } from '../components/Code'
import { LoremIpsum } from '../components/LoremIpsum'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ComponentsMessage() {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Message</Title>

            <Subtitle>
              Colored <b>message</b> blocks, to emphasize part of your page
            </Subtitle>

            <hr />

            <Columns>
              <Column isHalf>
                <Message>
                  <Message.Header>
                    <P>Hello World</P>

                    <Delete />
                  </Message.Header>

                  <Message.Body></Message.Body>
                </Message>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Message>
                      <Message.Header>
                        <P>Hello World</P>

                        <Delete />
                      </Message.Header>

                      <Message.Body>
                        Lorem ipsum...
                      </Message.Body>
                    </Message>
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
