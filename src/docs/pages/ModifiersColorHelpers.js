import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Columns,
  Column,
  Container,
  Content,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function ModifiersColorHelpers ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

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
              The following components support text color modifiers:
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
    </>
  )
}
