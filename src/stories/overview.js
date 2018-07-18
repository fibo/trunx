import React from 'react'

import { storiesOf } from '@storybook/react'

import Container from '../component/Container'
import Content from '../component/Content'
import Title from '../component/Title'
import Section from '../component/Section'

import indent from './indent'

storiesOf('Overview', module)
  .add('Getting started', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Getting started with Trunx
          </Title>

          <p>
            Use <b>npm</b> to install Trunx package. React v16 is required as a peer dependency.
          </p>

          <pre>
            <code>
              {indent`
                npm install react
                npm install trunx
              `}
            </code>
          </pre>

          <hr />

          <Title>
            HTML code requirements
          </Title>

          <p>
            Trunx is son of awesome <a href='https://bulma.io/' target='_blank'>Bulma</a> which to work correctly need a <b>responsive</b> webpage.
          </p>

          <p>
            Use the HTML5 doctype
          </p>

          <pre>
            <code>
              {indent`
                <!DOCTYPE html>
              `}
            </code>
          </pre>

          <p>
            Add the responsive viewport meta tag
          </p>

          <pre>
            <code>
              {indent`
                <meta name="viewport" content="width=device-width, initial-scale=1">
              `}
            </code>
          </pre>

          <p>
            To import components, the following syntaxes are supported.
          </p>

          <ul>
            <li>
              <pre>
                <code>
                  {indent`
                    import { Button } from 'trunx'
                  `}
                </code>
              </pre>
            </li>

            <li>
              <pre>
                <code>
                  {indent`
                    const Button = require('trunx/component/Button')
                  `}
                </code>
              </pre>
            </li>
          </ul>

          <Title>
            How it works
          </Title>

          <p>
            Trunx React components wrap Bulma CSS classes. For instance, this JSX code
          </p>

          <pre>
            <code language='jsx'>
              {indent`
                <Button isPrimary isLarge>Push me</Button>
              `}
            </code>
          </pre>

          <p>
            is equivalent to
          </p>

          <pre>
            <code language='jsx'>
              {indent`
                <button className="is-primary is-large">Push me</button>
              `}
            </code>
          </pre>

          <p>
            Note that you can still use Bulma directly if some feature or HTML tag is not implemented by Trunx, for example
          </p>

          <pre>
            <code language='jsx'>
              {indent`
                You are <strong class="has-text-success">successful</strong>!
              `}
            </code>
          </pre>
        </Content>
      </Container>
    </Section>
  ))
