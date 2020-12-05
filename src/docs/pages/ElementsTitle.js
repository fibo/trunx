import React from 'react'

import {
  B,
  Column,
  Columns,
  Container,
  Content,
  Delete,
  Li,
  P,
  Section,
  Subtitle,
  Title,
  Ul,
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ElementsTitle({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Title and Subtitle</Title>

            <Subtitle>
              Simple <B>headings</B> to add depth to your page
            </Subtitle>

            <hr />

            <Columns>
              <Column isOneThird>
                <P>There are 2 types of heading components:</P>

                <Ul>
                  <Li>
                    <code>Title</code>
                  </Li>

                  <Li>
                    <code>Subitle</code>
                  </Li>
                </Ul>
              </Column>

              <Column isOneThird>
                <Title>Title</Title>

                <Subtitle>Subtitle</Subtitle>
              </Column>

              <Column isOneThird>
                <Code language='jsx'>
                  {indent`
                    <Title>Title</Title>

                    <Subtitle>Subtitle</Subtitle>
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
