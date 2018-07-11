import React from 'react'

import { storiesOf } from '@storybook/react'

import Container from '../component/Container'
import Content from '../component/Content'
import Title from '../component/Title'

storiesOf('Overview', module)
  .add('Getting started', () => (
    <Container>
      <Content>
        <Title>
          Getting started with Trunx
        </Title>
        <p>
          Use <b>npm</b> to install Trunx package. React v16 is required as a peer dependency.

          <pre>
            <code>
              npm install react<br />
              npm install trunx
            </code>
          </pre>

        </p>

        <hr />

        <Title>
          HTML code requirements
        </Title>
        <p>
          Trunx is son of awesome <a href='https://bulma.io/' target='_blank'>Bulma</a> which to work correctly need a <b>responsive</b> webpage.
        </p>

        <p>
          Use the HTML5 doctype

          <pre>
            <code>{'<!DOCTYPE html>'}</code>
          </pre>
        </p>

        <p>
          Add the responsive viewport meta tag

          <pre>
            <code>{'<meta name="viewport" content="width=device-width, initial-scale=1">'}</code>
          </pre>
        </p>

        <p>
           To import components, the following syntaxes are supported.

           <ul>
             <li>
               <code>{"import { Button } from 'trunx'"}</code>
             </li>
             <li>
               <code>{"const Button = require('trunx/component/Button')"}</code>
             </li>
           </ul>
        </p>
      </Content>
    </Container>
  ))
