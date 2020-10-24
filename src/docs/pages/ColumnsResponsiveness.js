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

export function ColumnsResponsiveness ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Columns responsiveness
            </Title>

            <Subtitle>
              Handle <b>different</b> column layouts for each <b>breakpoint</b>
            </Subtitle>

            <hr />

            <Title is4>
              Mobile columns
            </Title>

            <p>
              By default, columns are only activated from <b>tablet</b> onwards. This means columns are stacked on top of each other on <b>mobile</b>.
              If you want columns to work on <b>mobile too</b>, just add the <code>isMobile</code> prop to the <code>Columns</code> component:
            </p>

            <Columns isMobile>
              <Column>
                <Notification isPrimary>1</Notification>
              </Column>
              <Column>
                <Notification isPrimary>2</Notification>
              </Column>
              <Column>
                <Notification isPrimary>3</Notification>
              </Column>
              <Column>
                <Notification isPrimary>4</Notification>
              </Column>
            </Columns>

            <Code language='jsx'>
              {indent`
                <Columns isMobile>
                  <Column>
                    <Notification>1</Notification>
                  </Column>
                  <Column>
                    <Notification>2</Notification>
                  </Column>
                  <Column>
                    <Notification>3</Notification>
                  </Column>
                  <Column>
                    <Notification>4</Notification>
                  </Column>
                </Columns>
              `}
            </Code>

            <p>
              If you <em>only</em> want columns on <b>desktop</b> upwards, just use the <code>isDesktop</code> prop to the <code>Columns</code> component:
            </p>

            <Columns isDesktop>
              <Column>
                <Notification isPrimary>1</Notification>
              </Column>
              <Column>
                <Notification isPrimary>2</Notification>
              </Column>
              <Column>
                <Notification isPrimary>3</Notification>
              </Column>
              <Column>
                <Notification isPrimary>4</Notification>
              </Column>
            </Columns>

            <Code language='jsx'>
              {indent`
                <Columns isDesktop>
                  <Column>
                    <Notification>1</Notification>
                  </Column>
                  <Column>
                    <Notification>2</Notification>
                  </Column>
                  <Column>
                    <Notification>3</Notification>
                  </Column>
                  <Column>
                    <Notification>4</Notification>
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
