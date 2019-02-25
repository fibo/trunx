import React from 'react'

import { storiesOf } from '@storybook/react'

import pkg from '../../package.json'

import Container from '../component/Container'
import Content from '../component/Content'
import Title from '../component/Title'
import Section from '../component/Section'
import Strong from '../component/Strong'

import indent from './indent'
import Code from './Code'

storiesOf('Overview', module)
  .add('Getting started', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Getting started with Trunx
          </Title>

          <p>
            <em>Trunx</em> is an open source collection of <em>React</em> components built on top of <em>Bulma</em> CSS framework and implemented with <em>TypeScript</em>.
            GitHub repo here: <a href='https://github.com/fibo/trunx'>github.com/fibo/trunx</a>.
          </p>

          <Title is4>
            Installation
          </Title>

          <p>
            Use <b>npm</b> to install Trunx package. React is required as a peer dependency.
          </p>

          <Code language='bash'>
            {indent`
              npm install react
              npm install trunx
            `}
          </Code>

          <p>
            It is also required to add Bulma CSS. You can use the bulma npm package that Trunx includes as a dependency.
            Note that trunx npm package major version will be the same as bulma npm package major version.
            Current bulma npm package version included is <code>v{pkg.dependencies.bulma.substring(1)}</code>.
          </p>

          <p>
            The good new is that it is easy to customize your Bulma build to create your own theme.
          </p>

          <p>
            It is also easy to add Bulma via webpack: in your entry JS file or wherever, import Bulma CSS.
          </p>

          <Code language='css'>
            {indent`
              import 'bulma/css/bulma.css'
            `}
          </Code>

          <p>
            The good new is that you can use Sass to customize your Bulma build to create your own theme.
            Install Sass using npm.
          </p>

          <Code language='bash'>
            {indent`
              npm install node-sass
            `}
          </Code>

          <p>
            Create, for example, a <em>_colors.scss</em> file like the following
          </p>

          <Code language='css'>
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
          </Code>

          <p>
            In your entry Sass file import first customizations and then Bulma.
          </p>

          <Code>
            {indent`
              /* Import custom variables first. */
              @import "colors";
              /* Import all bulma modules. */
              @import "bulma/bulma";
            `}
          </Code>

          <p>
            Note that you can also tweek and import individual Bulma modules, checkout <a href='https://bulma.io/documentation/'>official Bulma documentation</a>.
            See also <a href='https://jenil.github.io/bulmaswatch/'>Bulmaswatch</a> for custom Bulma themes.
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

          <Code language='html'>
            {indent`
              <!DOCTYPE html>
            `}
          </Code>

          <p>
            Add the responsive viewport meta tag
          </p>

          <Code language='html'>
            {indent`
              <meta name="viewport" content="width=device-width, initial-scale=1">
            `}
          </Code>

          <p>
            To import components, the following syntaxes are supported.
            For example to import the <code>Button</code> component you can use
            both ES6 or CommonJS syntaxes.
          </p>

          <Code language='jsx'>
            {indent`
              import { Button } from 'trunx'
            `}
          </Code>

          <Code language='jsx'>
            {indent`
              const { Button } = require('trunx')
            `}
          </Code>

          <p>
            It is also possible to import components directly.
            If you do not have <em>Tree shaking</em> setup in your build, the
            following imports will create lighter bundles <b>out of the box</b>.
          </p>

          <Code language='jsx'>
            {indent`
              import Button from 'trunx/component/Button'
            `}
          </Code>

          <Code language='jsx'>
            {indent`
              const Button = require('trunx/component/Button')
            `}
          </Code>

          <hr />

          <Title is4>
            How it works
          </Title>

          <p>
            Trunx React components wrap Bulma CSS classes. For instance, this JSX code
          </p>

          <Code language='jsx'>
            {indent`
              <Button isPrimary isLarge>Push me</Button>
            `}
          </Code>

          <p>
            is equivalent to
          </p>

          <Code language='jsx'>
            {indent`
              <button className="is-primary is-large">Push me</button>
            `}
          </Code>

          <p>
            Note that you can still use Bulma directly if some feature or HTML tag is not implemented by Trunx, for example
          </p>

          <Code language='jsx'>
            {indent`
              You are <strong className='has-text-success'>successful</strong>!
            `}
          </Code>

          <p>
            Actually, there is a <code>Strong</code> component in this case
          </p>

          <Code language='jsx'>
            {indent`
              You are <Strong hasTextSuccess>successful</Strong>!
            `}
          </Code>

          <p>
            You are <Strong hasTextSuccess>successful</Strong>!
          </p>
        </Content>
      </Container>
    </Section>
  ))
