import React, { Component } from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Breadcrumb,
  Container,
  Content,
  Navbar,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function ComponentsBreadcrumb ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Breadcrumb
            </Title>

            <Subtitle>
              A simple <b>breadcrumb</b> component to improve your navigation experience
            </Subtitle>

            <hr />

            <p>
              The <code>Breadcrumb</code> component only requires a <code>Breadcrumb.Item</code> children list.
            </p>

            <p>
              The dividers are automatically created in the content of the <code>::before</code> pseudo-element of <code>Breadcrumb.Item</code> components.
            </p>

            <p>
              You can inform the current page using the <code>isActive</code> prop in a <code>Breadcrumb.Item</code> component. It will disable the navigation of inner links.
            </p>
          </Content>

          <Content>
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
          </Content>
        </Container>
      </Section>
    </>
  )
}
