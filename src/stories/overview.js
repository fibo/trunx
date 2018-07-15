import React from 'react'

import { storiesOf } from '@storybook/react'

import Container from '../component/Container'
import Content from '../component/Content'
import Title from '../component/Title'

import Code from './Code'

storiesOf('Overview', module)
  .add('Getting started', () => (
    <Container>
      <Content>
        <Title is2>
          Getting started with Trunx
        </Title>

        <p>
          Use <b>npm</b> to install Trunx package. React v16 is required as a peer dependency.
        </p>

        <Code>
{`npm install react
npm install trunx`}
        </Code>

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

        <Code>
          {'<!DOCTYPE html>'}
        </Code>

        <p>
          Add the responsive viewport meta tag
        </p>

        <Code>
          {'<meta name="viewport" content="width=device-width, initial-scale=1">'}
        </Code>

        <p>
           To import components, the following syntaxes are supported.
        </p>

        <ul>
          <li>
            <Code>
              {"import { Button } from 'trunx'"}
            </Code>
          </li>

          <li>
            <Code>
              {"const Button = require('trunx/component/Button')"}
            </Code>
          </li>
        </ul>

        <Title>
          How it works
        </Title>

        <p>
          Trunx React components wrap Bulma CSS classes. For instance, this JSX code
        </p>

        <Code language='jsx'>
          {'<Button isPrimary isLarge>Push me</Button>'}
        </Code>

        <p>
          is equivalent to
        </p>

        <Code language='jsx'>
          {'<button className="is-primary is-large">Push me</button>'}
        </Code>

        <p>
          Note that you can still use Bulma directly if some feature or HTML tag is not implemented by Trunx, for example
        </p>

        <Code language='jsx'>
          {'You are <strong class="has-text-success">successful</strong>!'}
        </Code>
      </Content>
    </Container>
  ))
