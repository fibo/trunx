import React from 'react'

import {
  A,
  B,
  Column,
  Columns,
  Em,
  Container,
  Content,
  Li,
  Message,
  P,
  Section,
  Strong,
  Title,
  Ul,
} from '../../../component/index'
import pkg from '../../../package.json'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function Overview({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Getting started with Trunx</Title>

            <P>
              <Em>Trunx</Em> is an open source collection of <Em>React</Em>{' '}
              components built on top of <Em>Bulma</Em> CSS framework and
              implemented with <Em>TypeScript</Em>. GitHub repo here:
              <A href='https://github.com/fibo/trunx'>github.com/fibo/trunx</A>.
            </P>

            <Message isInfo>
              <Message.Body>
                Almost all bulma components are implemented, yet not documented
                here.
              </Message.Body>
            </Message>

            <Title is4>Installation</Title>

            <P>
              Use <B>npm</B> to install Trunx package. React is required as a
              peer dependency.
            </P>

            <Code language='bash'>
              {indent`
                npm install react
                npm install trunx
              `}
            </Code>

            <P>
              It is also required to add Bulma CSS. You can use the bulma npm
              package that Trunx includes as a dependency. Note that trunx npm
              package major version will be the same as bulma npm package major
              version. Current bulma npm package version included is{' '}
              <code>v{pkg.dependencies.bulma.substring(1)}</code>.
            </P>

            <P>
              The good new is that it is easy to customize your Bulma build to
              create your own theme.
            </P>

            <P>
              It is also easy to add Bulma via webpack: in your entry JS file or
              wherever, import Bulma CSS.
            </P>

            <Code language='css'>
              {indent`
                import 'bulma/css/bulma.css'
              `}
            </Code>

            <P>
              The good new is that you can use Sass to customize your Bulma
              build to create your own theme. Install Sass using npm.
            </P>

            <Code language='bash'>
              {indent`
                npm install node-sass --save-dev
              `}
            </Code>

            <P>
              Create, for example, a <Em>_colors.scss</Em> file like the
              following
            </P>

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

            <P>
              In your entry Sass file import first customizations and then
              Bulma.
            </P>

            <Code>
              {indent`
                /* Import custom variables first. */
                @import "colors";
                /* Import all bulma modules. */
                @import "bulma/bulma";
              `}
            </Code>

            <P>
              Note that you can also tweek and import individual Bulma modules,
              checkout{' '}
              <A href='https://bulma.io/documentation/'>
                official Bulma documentation
              </A>
              . See also{' '}
              <A href='https://jenil.github.io/bulmaswatch/'>Bulmaswatch</A> for
              custom Bulma themes.
            </P>

            <hr />

            <Title is4>HTML code requirements</Title>

            <P>
              Trunx is son of awesome{' '}
              <A href='https://bulma.io/' target='_blank'>
                Bulma
              </A>{' '}
              which to work correctly need a <B>responsive</B> webpage.
            </P>

            <P>Use the HTML5 doctype</P>

            <Code language='html'>
              {indent`
                <!DOCTYPE html>
              `}
            </Code>

            <P>Add the responsive viewport meta tag</P>

            <Code language='html'>
              {indent`
                <meta name="viewport" content="width=device-width, initial-scale=1">
              `}
            </Code>

            <P>
              To import components, the following syntaxes are supported. For
              example to import the <code>Button</code> component you can use
              both ES6 or CommonJS syntaxes.
            </P>

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

            <P>
              It is also possible to import components directly. If you do not
              have <Em>Tree shaking</Em> setup in your build, the following
              imports will create lighter bundles <B>out of the box</B>.
            </P>

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

            <Title is4>How it works</Title>

            <P>
              Trunx React components wrap Bulma CSS classes. For instance, this
              JSX code
            </P>

            <Code language='jsx'>
              {indent`
                <Button isPrimary isLarge>Push me</Button>
              `}
            </Code>

            <P>is equivalent to</P>

            <Code language='jsx'>
              {indent`
                <button className="is-primary is-large">Push me</button>
              `}
            </Code>

            <P>
              Note that you can still use Bulma directly if some feature or HTML
              tag is not implemented by Trunx, for example
            </P>

            <Code language='jsx'>
              {indent`
                You are <strong className='has-text-success'>successful</strong>!
              `}
            </Code>

            <p>
              Actually, there is a <code>Strong</code> component in this case
            </p>

            <Columns>
              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    You are <Strong hasTextSuccess>successful</Strong>!
                  `}
                </Code>
              </Column>

              <Column isHalf>
                <P>
                  You are <Strong hasTextSuccess>successful</Strong>!
                </P>
              </Column>
            </Columns>

            <P>
              Notice also that every Trunx component accepts a{' '}
              <code>className</code> prop which will be appended to Bulma
              classes in order to customize the component style.
            </P>

            <P>
              Trunx component props are <B>all optional</B>. Follows a list of
              all component currently implemented.
            </P>

            <Ul>
              {[
                {
                  component: 'A',
                },
                {
                  component: 'B',
                },
                {
                  component: 'Box',
                },
                {
                  component: 'Breadcrumb',
                  subComponents: ['Item'],
                },
                {
                  component: 'Button',
                },
                {
                  component: 'Buttons',
                },
                {
                  component: 'Card',
                  subComponents: ['Content', 'Footer', 'Header', 'Image'],
                },
                {
                  component: 'Checkbox',
                },
                {
                  component: 'Column',
                },
                {
                  component: 'Columns',
                },
                {
                  component: 'Container',
                },
                {
                  component: 'Content',
                },
                {
                  component: 'Control',
                },
                {
                  component: 'Delete',
                },
                {
                  component: 'Dropdown',
                  subComponents: [
                    'Content',
                    'Divider',
                    'Item',
                    'Menu',
                    'Trigger',
                  ],
                },
                {
                  component: 'Em',
                },
                {
                  component: 'Field',
                  subComponents: ['Body', 'Label;'],
                },
                {
                  component: 'FileUpload',
                  subComponents: ['Cta', 'Icon', 'Input', 'Label', 'Name'],
                },
                {
                  component: 'Footer',
                },
                {
                  component: 'Heading',
                },
                {
                  component: 'Help',
                },
                {
                  component: 'Hero',
                  subComponents: ['Body', 'Foot', 'Head'],
                },
                {
                  component: 'Icon',
                  subComponents: ['Svg'],
                },
                {
                  component: 'Image',
                },
                {
                  component: 'Input',
                },
                {
                  component: 'Label',
                },
                {
                  component: 'Level',
                  subComponents: ['Item', 'Left', 'Right'],
                },
                {
                  component: 'Li',
                },
                {
                  component: 'Media',
                  subComponents: ['Content', 'Left', 'Right'],
                },
                {
                  component: 'Message',
                  subComponents: ['Body', 'Header'],
                },
                {
                  component: 'Modal',
                  subComponents: [
                    'Background',
                    'Card',
                    'Card.Body',
                    'Card.Foot',
                    'Card.Head',
                    'Card.Title',
                    'Close',
                    'Content',
                  ],
                },
                {
                  component: 'Navbar',
                  subComponents: [
                    'Brand',
                    'Burger',
                    'Divider',
                    'Dropdown',
                    'End',
                    'Item',
                    'Link',
                    'Menu',
                    'Start',
                  ],
                },
                {
                  component: 'Notification',
                },
                {
                  component: 'P',
                },
                {
                  component: 'Pagination',
                  subComponents: [
                    'Ellipsis',
                    'Link',
                    'List',
                    'Next',
                    'Previous',
                  ],
                },
                {
                  component: 'Panel',
                  subComponents: ['Block', 'Heading', 'Icon', 'Tabs'],
                },
                {
                  component: 'Progress',
                },
                {
                  component: 'Radio',
                },
                {
                  component: 'Section',
                },
                {
                  component: 'Select',
                },
                {
                  component: 'Span',
                },
                {
                  component: 'Small',
                },
                {
                  component: 'Strong',
                },
                {
                  component: 'Subtitle',
                },
                {
                  component: 'Table',
                  subComponents: ['Container'],
                },
                {
                  component: 'Tabs',
                },
                {
                  component: 'Tag',
                },
                {
                  component: 'Tags',
                },
                {
                  component: 'Textarea',
                },
                {
                  component: 'Tile',
                  subComponents: [
                    'Ancestor',
                    'Child',
                    'Child.Box',
                    'Child.Notification',
                  ],
                },
                {
                  component: 'Title',
                },
                {
                  component: 'Ul',
                },
              ].map(({ component, subComponents = [] }, i) => (
                <Li key={i}>
                  <A
                    href={`https://github.com/fibo/trunx/blob/master/src/component/${component}.tsx`}
                    target='_blank'
                  >
                    {component}
                  </A>

                  {subComponents.length > 0 && (
                    <Ul>
                      {subComponents.map((subComponent, i) => (
                        <Li key={i}>{`${component}.${subComponent}`}</Li>
                      ))}
                    </Ul>
                  )}
                </Li>
              ))}
            </Ul>
          </Content>
        </Container>
      </Section>
    </>
  )
}
