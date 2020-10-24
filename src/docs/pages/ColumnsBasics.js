import React from 'react'

import {
  Column,
  Columns,
  Container,
  Content,
  Notification,
  Section,
  Subtitle,
  Title
} from '../../../index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ColumnBasics ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Columns powered by Flexbox
            </Title>

            <Subtitle>
              A simple way to build responsive columns
            </Subtitle>

            <hr />

            <p>
              Building a <b>columns layout</b> with Trunx is very simple:
            </p>

            <ol>
              <li>Add a <code>Columns</code> component as container.</li>

              <li>Add as many <code>Column</code> components as children.</li>
            </ol>

            <p>
              Each column will have an <b>equal width</b>, no matter the number of columns.
            </p>

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
