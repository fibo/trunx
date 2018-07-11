import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'

import Container from '../layout/Container'
import Content from '../elements/Content'
import Footer from '../layout/Footer'
import Hero from '../layout/Hero'
import Notification from '../elements/Notification'
import Section from '../layout/Section'
import Subtitle from '../elements/Subtitle'
import Title from '../elements/Title'

storiesOf('Layout', module)
  .add('Container', () => (
    <Fragment>
      <Container>
        <Notification>
          This container is <strong>centered</strong> on desktop.
        </Notification>
      </Container>

      <Container isFluid>
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
        </Notification>
      </Container>

      <Container isWidescreen>
        <Notification>
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
        </Notification>
      </Container>

      <Container isFullhd>
        <Notification>
          This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
        </Notification>
      </Container>
    </Fragment>
  ))
  .add('Hero', () => (
    <Fragment>
      <Hero>
        <Hero.Body>
          <Container>
            <Title>Hero title</Title>
            <Subtitle>Hero subtitle</Subtitle>
          </Container>
        </Hero.Body>
      </Hero>

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
    </Fragment>
  ))
  .add('Section', () => (
    <Section>
      <Container>
        <Title>Section</Title>
        <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
      </Container>
    </Section>
  ))
  .add('Footer', () => (
    <Footer>
      <Content hasTextCentered>
        <p>
          <strong>Trunx</strong> by <a href='http://g14n.info'>Gianluca Casati</a>. The source code is licensed <a href='http://g14n.info/mit-license'>MIT</a>.
        </p>
      </Content>
    </Footer>
  ))
