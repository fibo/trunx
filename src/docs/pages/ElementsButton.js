import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  B,
  Button,
  Buttons,
  Column,
  Columns,
  Container,
  Content,
  Li,
  P,
  Section,
  Subtitle,
  Title,
  Ul
} from '../../../index.js'

export default function ElementsButton ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

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

            <Ul>
              <Li>
                <code>{'<button>'}</code> form buttons
              </Li>

              <Li>
                <code>{'<a>'}</code> anchor links, if there is an <code>href</code> prop
              </Li>

              <Li>
                If there is a <code>type</code> prop:

                <Ul>
                  <Li>
                    <code>{'<input type="submit">'}</code> submit inputs
                  </Li>

                  <Li>
                    <code>{'<input type="reset">'}</code> reset inputs
                  </Li>
                </Ul>
              </Li>

            </Ul>

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

            <P>
              The button comes in <B>four different sizes</B>.
            </P>

            <Ul>
              <Li>small</Li>
              <Li>normal</Li>
              <Li>medium</Li>
              <Li>large</Li>
            </Ul>

            <P>
              While the default size is the <B>normal</B> one, the <code>isNormal</code> prop exists in case you need to reset the button to its normal size.
            </P>

            <Columns>
              <Column isHalf>
                <Buttons areMedium>
                  <Button isSmall>Small</Button>
                  <Button>Default</Button>
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
                    <Button>Default</Button>
                    <Button isNormal>Normal</Button>
                    <Button isMedium>Medium</Button>
                    <Button isLarge>Large</Button>
                  </Buttons>
                `}
                </Code>
              </Column>
            </Columns>

            <P>
              You can change the size of <B>multiple buttons</B> at once by wrapping them in a <code>Buttons</code> parent, and applying one of 3 props:
            </P>

            <Ul>
              <Li><code>areSmall</code></Li>
              <Li><code>areMedium</code></Li>
              <Li><code>areLarge</code></Li>
            </Ul>

            <Columns>
              <Column isHalf>
                <Buttons areMedium>
                  <Button>All</Button>
                  <Button>Medium</Button>
                  <Button>Size</Button>
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Buttons areMedium>
                      <Button>All</Button>
                      <Button>Medium</Button>
                      <Button>Size</Button>
                    </Buttons>
                  `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <Buttons areSmall>
                  <Button>Small</Button>
                  <Button>Small</Button>
                  <Button>Small</Button>
                  <Button isNormal>Normal</Button>
                  <Button>Small</Button>
                </Buttons>
              </Column>

              <Column isHalf>
                <Code language='jsx'>
                  {indent`
                    <Buttons areSmall>
                      <Button>Small</Button>
                      <Button>Small</Button>
                      <Button>Small</Button>
                      <Button isNormal>Normal</Button>
                      <Button>Small</Button>
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
