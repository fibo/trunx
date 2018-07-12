import React from 'react'

import { storiesOf } from '@storybook/react'

import Container from '../component/Container'
import Content from '../component/Content'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import Notification from '../component/Notification'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Title from '../component/Title'

import Meta from './Meta'

storiesOf('Layout', module)
  .add('Container', () => (
    <Container>
      <Content>
        <Title is2>
          Container
        </Title>

        <Subtitle>
          A simple <b>container</b> to center your content horizontally
        </Subtitle>

        <hr />

        <p>
          The <code>Container</code> component can be used in any context, but mostly as a <b>direct child</b> of either:

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
          The containers <b>width</b> for each <b>breakpoint</b> is the result of: <code>$device - (2 * $gap)</code>. The <code>$gap</code> variable has a default value of <code>32px</code> but can be modified.

           This is how the container will behave:
        </p>

        <ul>
          <li>
            on <code>$desktop</code> it will have a maximum width of <b>960px</b>.
          </li>

          <li>
            on <code>$widescreen</code> it will have a maximum width of <b>1152px</b>.
          </li>

          <li>
            on <code>$fullhd</code> it will have a maximum width of <b>1344px</b>.
          </li>
        </ul>

        <p>
          The values <b>960</b>, <b>1152</b> and <b>1344</b> have been chosen because they are divisible by both <b>12</b> and <b>16</b>.
        </p>

        <Container>
          <Notification>
            This container is <strong>centered</strong> on desktop.
          </Notification>
        </Container>

        <Title>
          Fluid container
        </Title>

        <p>
          If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides, add the <code>is-fluid</code> modifier:
        </p>

        <Container isFluid>
          <Notification>
            This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
          </Notification>
        </Container>

        <Title>
          Breakpoint containers
        </Title>

        <p>
    With the two props <code>isWidescreen</code> and <code>isFullhd</code>, you can have a <em>fullwidth</em> container <b>until</b> those specific breakpoints.
        </p>

        <Container isWidescreen>
          <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
          </Notification>
        </Container>

        <Container isFullhd>
          <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
          </Notification>
        </Container>

      </Content>
    </Container>
  ))
  .add('Hero', () => (
    <Container>
      <Content>
        <Title is2>
          Hero
        </Title>

        <Subtitle>
          An imposing <b>hero</b> banner to showcase something
        </Subtitle>

        <Meta colors sizes />

        <hr />

        <p>
          The hero component allows you to add a <b>full width banner</b> to your webpage, which can optionally cover the full height of the page as well.
        </p>

        <p>
          The basic requirement of this component are:
        </p>

        <ul>
          <li>
            <code>Hero</code> as the main container
            <ul>
              <li>
                <code>Hero.Body</code> as a direct child, in which you can put all your content
              </li>
            </ul>
          </li>
        </ul>

        <p>
          For the full height hero to work, you will also need a <code>Hero.Head</code> and a <code>Hero.Foot</code> component.
        </p>

        <Hero>
          <Hero.Body>
            <Container>
              <Title>Hero title</Title>
              <Subtitle>Hero subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Title>
          Colors
        </Title>

        <p>
          As with buttons, you can choose one of the <b>7 different colors</b>:
        </p>

        <Hero isPrimary>
          <Hero.Body>
            <Container>
              <Title>isPrimary title</Title>
              <Subtitle>isPrimary subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isInfo>
          <Hero.Body>
            <Container>
              <Title>isInfo title</Title>
              <Subtitle>isInfo subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isSuccess>
          <Hero.Body>
            <Container>
              <Title>isSuccess title</Title>
              <Subtitle>isSuccess subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isWarning>
          <Hero.Body>
            <Container>
              <Title>Warning title</Title>
              <Subtitle>Warning subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isDanger>
          <Hero.Body>
            <Container>
              <Title>Danger title</Title>
              <Subtitle>Danger subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isLight>
          <Hero.Body>
            <Container>
              <Title>isLight title</Title>
              <Subtitle>isLight subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isDark>
          <Hero.Body>
            <Container>
              <Title>Dark title</Title>
              <Subtitle>Dark subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>
      </Content>
    </Container>
  ))
  .add('Section', () => (
    <Container>
      <Content>
        <Title is2>
          Section
        </Title>

        <Subtitle>
          A simple container to divide your page into <b>sections</b>, like the one you're currently reading
        </Subtitle>

        <hr />

        <p>
          Use sections as <b>direct</b> children of <code>body</code>.
        </p>

        <Section>
          <Container>
            <Title>Section</Title>
            <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
          </Container>
        </Section>

      </Content>
    </Container>
  ))
  .add('Footer', () => (
    <Container>
      <Content>
        <Title is2>
          Footer
        </Title>

        <Subtitle>
          A simple responsive <b>footer</b> which can include anything: lists, headings, columns, icons, buttons, etc.
        </Subtitle>

        <hr />

        <Footer>
          <Content hasTextCentered>
            <p>
              <strong>Trunx</strong> by <a href='http://g14n.info'>Gianluca Casati</a>. The source code is licensed <a href='http://g14n.info/mit-license'>MIT</a>.
            </p>
          </Content>
        </Footer>
      </Content>
    </Container>
  ))
