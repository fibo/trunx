import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from '../component/Button'
import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import Field from '../component/Field'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'

storiesOf('Modifiers', module)
  .add('Syntax', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Modifiers syntax
          </Title>

          <Subtitle>
            Most Bulma elements have <b>alternative</b> styles. To apply them, you only need to append one of the <b>modifier props</b>. They all start with <code>is</code> or <code>has</code>.
          </Subtitle>

          <hr />

          <Columns>
            <Column>
              <p>
                Let's start with a simple <code>Button</code> component.
              </p>
            </Column>

            <Column>
              <Button>Button</Button>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Button>Button</Button>
                `}
              </Code>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <p>
                By adding the <code>isPrimary</code> prop you can modify the color.
              </p>
            </Column>

            <Column>
              <Button isPrimary>Button</Button>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Button isPrimary>Button</Button>
                `}
              </Code>
            </Column>
          </Columns>

          <Columns>
            <Column>
              <p>
                You can use one of the <b>6 main colors</b>, applying the following modifier props:
              </p>

              <ul>
                <li>
                  <code>
                    isPrimary
                  </code>
                </li>

                <li>
                  <code>
                    isInfo
                  </code>
                </li>

                <li>
                  <code>
                    isSuccess
                  </code>
                </li>

                <li>
                  <code>
                    isWarning
                  </code>
                </li>

                <li>
                  <code>
                    isDanger
                  </code>
                </li>

                <li>
                  <code>isLink</code>
                </li>
              </ul>
            </Column>

            <Column>
              <Field>
                <Button isPrimary>Button</Button>
              </Field>

              <Field>
                <Button isInfo>Button</Button>
              </Field>

              <Field>
                <Button isSuccess>Button</Button>
              </Field>

              <Field>
                <Button isWarning>Button</Button>
              </Field>

              <Field>
                <Button isDanger>Button</Button>
              </Field>

              <Field>
                <Button isLink>Button</Button>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Button isPrimary>Button</Button>

                  <Button isInfo>Button</Button>

                  <Button isSuccess>Button</Button>

                  <Button isWarning>Button</Button>

                  <Button isDanger>Button</Button>

                  <Button isLink>Button</Button>
                `}
              </Code>
            </Column>
          </Columns>

          <p>
            Please note that <code>isLink</code> prop is available only for the following components:
          </p>

          <ul>
            <li>
              <code>
                Button
              </code>
            </li>

            <li>
              <code>
                Message
              </code>
            </li>

            <li>
              <code>
                Tag
              </code>
            </li>
          </ul>

          <Columns>
            <Column isHalf>
              <p>
                You can alter the <b>size</b>:
              </p>

              <ul>
                <li>
                  <code>
                    isSmall
                  </code>
                </li>

                <li>
                  <code>
                    isMedium
                  </code>
                </li>

                <li>
                  <code>
                    isLarge
                  </code>
                </li>
              </ul>
            </Column>

            <Column>
              <Field>
                <Button isSmall>Button</Button>
              </Field>

              <Field>
                <Button>Button</Button>
              </Field>

              <Field>
                <Button isMedium>Button</Button>
              </Field>

              <Field>
                <Button isLarge>Button</Button>
              </Field>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Button isSmall>Button</Button>

                  <Button>Button</Button>

                  <Button isMedium>Button</Button>

                  <Button isLarge>Button</Button>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Color helpers', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Color helpers
          </Title>

          <Subtitle>
            Change the <b>color</b> of the text and/or background
          </Subtitle>

          <hr />

          <Title is4>
            Text color
          </Title>

          <Columns>
            <Column isHalf>
              <Title hasTextSuccess>You win!</Title>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Title hasTextSuccess>You win!</Title>
                `}
              </Code>
            </Column>
          </Columns>
          <p>
            You can set some components to one of the <b>9 colors</b> or <b>9 shades of grey</b>:
          </p>

          <ul>
            <li>
              <code>
                hasTextBlack
              </code>
            </li>

            <li>
              <code>
                hasTextBlackBis
              </code>
            </li>

            <li>
              <code>
                hasTextBlackTer
              </code>
            </li>

            <li>
              <code>
                hasTextDanger
              </code>
            </li>

            <li>
              <code>
                hasTextDark
              </code>
            </li>

            <li>
              <code>
                hasTextGrey
              </code>
            </li>

            <li>
              <code>
                hasTextGreyDark
              </code>
            </li>

            <li>
              <code>
                hasTextGreyDarker
              </code>
            </li>

            <li>
              <code>
                hasTextGreyLight
              </code>
            </li>

            <li>
              <code>
                hasTextGreyLighter
              </code>
            </li>

            <li>
              <code>
                hasTextLight
              </code>
            </li>

            <li>
              <code>
                hasTextLink
              </code>
            </li>

            <li>
              <code>
                hasTextInfo
              </code>
            </li>

            <li>
              <code>
                hasTextPrimary
              </code>
            </li>

            <li>
              <code>
                hasTextSuccess
              </code>
            </li>

            <li>
              <code>
                hasTextWarning
              </code>
            </li>

            <li>
              <code>
                hasTextWhite
              </code>
            </li>

            <li>
              <code>
                hasTextWhiteBis
              </code>
            </li>

            <li>
              <code>
                hasTextWhiteTer
              </code>
            </li>
          </ul>

          <p>
            The following elements support text color modifiers:
          </p>

          <ul>
            <li>
              <code>
                Box
              </code>
            </li>

            <li>
              <code>
                Breadcrumb
              </code>
            </li>

            <li>
              <code>
                Buttons
              </code>
            </li>

            <li>
              <code>
                Button
              </code>
            </li>

            <li>
              <code>
                Card.Content
              </code>
            </li>

            <li>
              <code>
                Card.Footer
              </code>
            </li>

            <li>
              <code>
                Footer
              </code>
            </li>

            <li>
              <code>
                Heading
              </code>
            </li>

            <li>
              <code>
                Help
              </code>
            </li>

            <li>
              <code>
                Label
              </code>
            </li>

            <li>
              <code>
                Level
              </code>
            </li>

            <li>
              <code>
                Strong
              </code>
            </li>

            <li>
              <code>
                Textarea
              </code>
            </li>

            <li>
              <code>
                Title
              </code>
            </li>
          </ul>
        </Content>
      </Container>
    </Section>
  ))
