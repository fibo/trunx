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

          <p>
            It is also required to add Bulma CSS. You can use a CDN, see <a href='https://bulma.io/documentation/'>Bulma documentation</a> or a custom Bulma theme, checkout <a href='https://jenil.github.io/bulmaswatch/'>Bulmaswatch</a>.
            but the good new is that it is easy to customize your Bulma build to create your own theme.
          </p>

          <p>
            It is also easy to add Bulma via webpack. Install Bulma using npm.
          </p>

          <pre>
            <code>
              {indent`
                npm install bulma
              `}
            </code>
          </pre>

          <p>
            Then in your entry JS file or wherever, import Bulma CSS
          </p>

          <pre>
            <code>
              {indent`
                import 'bulma/css/bulma.css'
              `}
            </code>
          </pre>

          <p>
            The good new is that you can use Sass to customize your Bulma build to create your own theme.
            Install Bulma and Sass using npm.
          </p>

          <pre>
            <code>
              {indent`
                npm install bulma
                npm install node-sass
              `}
            </code>
          </pre>

          <p>
            Create, for example, a <em>_colors.scss</em> file like the following
          </p>

          <pre>
            <code>
              {indent`
                $azure: hsl(180, 100%, 97%);
                $limegreen: hsl(120, 60%, 50%);
                $orangered: hsl(16, 100%, 50%);
                $skyblue: hsl(197, 71%, 73%);
                $steelblue: hsl(207, 44%, 49%);

                $body-background-color: $azure;

                $primary: $skyblue;

                $info: $steelblue;
                $success: $limegreen;
                $warning: hsl(48, 89%, 60%);
                $danger: $orangered;
              `}
            </code>
          </pre>

          <p>
            In your entry Sass file import first customizations and then Bulma.
          </p>

          <pre>
            <code>
              {indent`
                /* Import custom variables first. */
                @import "colors";
                /* Import all bulma modules. */
                @import "bulma/bulma";
              `}
            </code>
          </pre>

          <p>
            Note that you can also tweek and import individual Bulma modules, checkout <a href='https://bulma.io/documentation/'>official Bulma documentation</a>.
          </p>

          <hr />

          <Title is4>
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
                    import Button from 'trunx/component/Button'
                  `}
                </code>
              </pre>
            </li>

            <li>
              <pre>
                <code>
                  {indent`
                    const { Button } = require('trunx')
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

          <Title is4>
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
