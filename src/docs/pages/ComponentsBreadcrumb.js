import React from 'react'

import {
  A,
  B,
  Breadcrumb,
  Container,
  Content,
  Div,
  P,
  Section,
  Subtitle,
  Title,
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ComponentsBreadcrumb({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Breadcrumb</Title>

            <Subtitle>
              A simple <B>breadcrumb</B> component to improve your navigation
              experience
            </Subtitle>

            <hr />

            <P>
              The <code>Breadcrumb</code> component only requires a{' '}
              <code>Breadcrumb.Item</code> children list.
            </P>

            <P>
              The dividers are automatically created in the content of the{' '}
              <code>::before</code> pseudo-element of{' '}
              <code>Breadcrumb.Item</code> components.
            </P>

            <P>
              You can inform the current page using the <code>isActive</code>{' '}
              prop in a <code>Breadcrumb.Item</code> component. It will disable
              the navigation of inner links.
            </P>
          </Content>

          <Div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href='#'>Bulma</a>
              </Breadcrumb.Item>

              <Breadcrumb.Item>
                <a href='#'>Documentation</a>
              </Breadcrumb.Item>

              <Breadcrumb.Item>
                <a href='#'>Components</a>
              </Breadcrumb.Item>

              <Breadcrumb.Item isActive>
                <a href='#' aria-current='page'>
                  Breadcrumb
                </a>
              </Breadcrumb.Item>
            </Breadcrumb>

            <Code language='jsx'>
              {indent`
                <Breadcrumb>
                    <Breadcrumb.Item>
                      <a href='#'>Bulma</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>
                      <a href='#'>Documentation</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item>
                      <a href='#'>Components</a>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item isActive>
                      <a href='#' aria-current='page'>Breadcrumb</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
              `}
            </Code>
          </Div>
        </Container>
      </Section>
    </>
  )
}
