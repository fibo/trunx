import React from 'react'

import {
  Container,
  Content,
  Notification,
  Section,
  Title,
  Subtitle
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function LayoutContainer ({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Container</Title>

            <Subtitle>
              A simple <b>container</b> to center your content horizontally
            </Subtitle>

            <hr />

            <p>
              The <code>Container</code> component can be used in any context,
              but mostly as a <b>direct child</b> of either:
            </p>

            <ul>
              <li>
                <code>Navbar</code>
              </li>

              <li>
                <code>Hero</code>
              </li>

              <li>
                <code>Section</code>
              </li>

              <li>
                <code>Footer</code>
              </li>
            </ul>

            <p>
              The containers <b>width</b> for each <b>breakpoint</b> is the
              result of: <code>$device - (2 * $gap)</code>. The{' '}
              <code>$gap</code> variable has a default value of{' '}
              <code>32px</code> but can be modified. This is how the container
              will behave:
            </p>

            <ul>
              <li>
                on <code>$desktop</code> it will have a maximum width of{' '}
                <b>960px</b>.
              </li>

              <li>
                on <code>$widescreen</code> it will have a maximum width of{' '}
                <b>1152px</b>.
              </li>

              <li>
                on <code>$fullhd</code> it will have a maximum width of{' '}
                <b>1344px</b>.
              </li>
            </ul>

            <p>
              The values <b>960</b>, <b>1152</b> and <b>1344</b> have been
              chosen because they are divisible by both <b>12</b> and <b>16</b>.
            </p>

            <Container>
              <Notification>
                This container is <strong>centered</strong> on desktop.
              </Notification>
            </Container>

            <Code language='jsx'>
              {indent`
                <Container>
                  <Notification>
                    This container is <strong>centered</strong> on desktop.
                  </Notification>
                </Container>
              `}
            </Code>

            <hr />

            <Title is4>Fluid container</Title>

            <p>
              If you don't want to have a maximum width but want to keep the
              32px margin on the left and right sides, add the{' '}
              <code>is-fluid</code> modifier:
            </p>

            <Container isFluid>
              <Notification>
                This container is <strong>fluid</strong>: it will have a 32px
                gap on either side, on any viewport size.
              </Notification>
            </Container>

            <Code language='jsx'>
              {indent`
                <Container isFluid>
                  <Notification>
                    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
                  </Notification>
                </Container>
              `}
            </Code>

            <Title is4>Breakpoint containers</Title>

            <p>
              With the two props <code>isWidescreen</code> and{' '}
              <code>isFullhd</code>, you can have a <em>fullwidth</em> container{' '}
              <b>until</b> those specific breakpoints.
            </p>

            <Container isWidescreen>
              <Notification>
                This container is <strong>fullwidth</strong> <em>until</em> the{' '}
                <code>$widescreen</code> breakpoint.
              </Notification>
            </Container>

            <Code language='jsx'>
              {indent`
                <Container isWidescreen>
                  <Notification>
                  This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
                  </Notification>
                </Container>
              `}
            </Code>

            <Container isFullhd>
              <Notification>
                This container is <strong>fullwidth</strong> <em>until</em> the{' '}
                <code>$fullhd</code> breakpoint.
              </Notification>
            </Container>

            <Code language='jsx'>
              {indent`
                <Container isFullhd>
                  <Notification>
                  This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
                  </Notification>
                </Container>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
