import React from 'react'

import {
  B,
  Column,
  Columns,
  Container,
  Content,
  Li,
  Notification,
  Ol,
  P,
  Section,
  Subtitle,
  Title,
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ColumnsBasics({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Columns powered by Flexbox</Title>

            <Subtitle>A simple way to build responsive columns</Subtitle>

            <hr />

            <P>
              Building a <B>columns layout</B> with Trunx is very simple:
            </P>

            <Ol>
              <Li>
                Add a <code>Columns</code> component as container.
              </Li>

              <Li>
                Add as many <code>Column</code> components as children.
              </Li>
            </Ol>

            <P>
              Each column will have an <B>equal width</B>, no matter the number
              of columns.
            </P>

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

            <Code language='jsx'>
              {indent`
                <Columns>
                  <Column>
                    <Notification>First Column</Notification>
                  </Column>
                  <Column>
                    <Notification>Second Column</Notification>
                  </Column>
                  <Column>
                    <Notification>Third Column</Notification>
                  </Column>
                  <Column>
                    <Notification>Fourth Column</Notification>
                  </Column>
                </Columns>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
