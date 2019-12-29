import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Button,
  Buttons,
  Column,
  Columns,
  Container,
  Content,
  Notification,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function ElementsButton ({
  location: { pathname }
}) {
  return (
    <>
      <Nav pathname={pathname} />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Button
            </Title>

            <Subtitle>
              The classic <b>button</b>, in different colors, sizes, and states
            </Subtitle>

            <hr />

            <p>
              The <b>button</b> is an essential element of any design. It's meant to look and behave as an <b>interactive</b> element of your page.
            </p>

            <Columns>
              <Column isHalf>
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

            <p>
              The <code>Button</code> component will render as
            </p>

            <ul>
              <li>
                <code>{'<button>'}</code> form buttons
              </li>

              <li>
                <code>{'<a>'}</code> anchor links, if there is an <code>href</code> prop
              </li>

              <li>
                If there is a <code>type</code> prop:

                <ul>
                  <li>
                    <code>{'<input type="submit">'}</code> submit inputs
                  </li>

                  <li>
                    <code>{'<input type="reset">'}</code> reset inputs
                  </li>
                </ul>
              </li>

            </ul>

            <Columns>
              <Column isHalf>
                <Buttons>
                  <Button href='#'>Anchor</Button>

                  <Button>Button</Button>

                  <Button type='submit' value='Submit input' />

                  <Button type='reset' value='Reset input' />
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                  <Buttons>
                    <Button href='#'>Anchor</Button>

                    <Button>Button</Button>

                    <Button type='submit' value='Submit input' />

                    <Button type='reset' value='Reset input' />
                  </Buttons>
                `}
                </Code>
              </Column>
            </Columns>

            <p>
              Despite in Bulma it is not possible, in Trunx you can set a <em>submit</em> or <em>reset</em> type <code>Button</code> component to <code>disabled</code> or even set it to <code>isLoading</code> state.
            </p>

            <Columns>
              <Column isHalf>
                <Buttons>
                  <Button type='submit' disabled value='Button' />

                  <Button type='submit' isLoading value='Button' />
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                  <Button type='submit' disabled value='Button' />

                  <Button type='submit' isLoading value='Button' />
                `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Colors
            </Title>

            <Columns>
              <Column isHalf>
                <Buttons>
                  <Button isWhite>White</Button>
                  <Button isLight>Light</Button>
                  <Button isDark>Dark</Button>
                  <Button isBlack>Black</Button>
                  <Button isText>Text</Button>
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                  <Buttons>
                    <Button isWhite>White</Button>
                    <Button isLight>Light</Button>
                    <Button isDark>Dark</Button>
                    <Button isBlack>Black</Button>
                    <Button isText>Text</Button>
                  </Buttons>
                `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <Buttons>
                  <Button isPrimary>Primary</Button>
                  <Button isLink>Link</Button>
                  <Button isInfo>Info</Button>
                  <Button isSuccess>Success</Button>
                  <Button isWarning>Warning</Button>
                  <Button isDanger>Danger</Button>
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                  <Buttons>
                    <Button isPrimary>Primary</Button>
                    <Button isLink>Link</Button>
                    <Button isInfo>Info</Button>
                    <Button isSuccess>Success</Button>
                    <Button isWarning>Warning</Button>
                    <Button isDanger>Danger</Button>
                  </Buttons>
                `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Sizes
            </Title>

            <Columns>
              <Column isHalf>
                <Buttons>
                  <Button isSmall>Small</Button>
                  <Button isNormal>Normal</Button>
                  <Button isMedium>Medium</Button>
                  <Button isLarge>Large</Button>
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                  <Buttons>
                    <Button isSmall>Small</Button>
                    <Button isNormal>Normal</Button>
                    <Button isMedium>Medium</Button>
                    <Button isLarge>Large</Button>
                  </Buttons>
                `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>
              Displays
            </Title>

            <Columns>
              <Column isHalf>
                <Buttons>
                  <Button isSmall isFullwidth>Small</Button>
                  <Button isNormal isFullwidth>Normal</Button>
                  <Button isMedium isFullwidth>Medium</Button>
                  <Button isLarge isFullwidth>Large</Button>
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                  <Buttons>
                    <Button isSmall isFullwidth>Small</Button>
                    <Button isNormal isFullwidth>Normal</Button>
                    <Button isMedium isFullwidth>Medium</Button>
                    <Button isLarge isFullwidth>Large</Button>
                  </Buttons>
                `}
                </Code>
              </Column>
            </Columns>
          </Content>
        </Container>
      </Section>
    </>
  )
}
