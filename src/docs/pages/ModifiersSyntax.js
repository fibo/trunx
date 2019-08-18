import React from 'react'

import Code from '../components/Code.js'
import indent from '../utils/indent.js'

import {
  Button,
  Columns,
  Column,
  Container,
  Content,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function ModifiersSyntax () {
  return (
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

  )
}
