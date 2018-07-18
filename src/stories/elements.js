import React from 'react'

import { storiesOf } from '@storybook/react'

import Box from '../component/Box'
import Button from '../component/Button'
import Buttons from '../component/Buttons'
import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import Delete from '../component/Delete'
import Notification from '../component/Notification'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Tag from '../component/Tag'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'
import Meta from './Meta'

storiesOf('Elements', module)
  .add('Box', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Box
          </Title>

          <Subtitle>
            A white <b>box</b> to contain other elements
          </Subtitle>

          <Meta />

          <hr />

          <p>
            The <code>.box</code> element is simply a container with a shadow, a border, a radius, and some padding.
            For example, you can include a media object:
          </p>

          <Box>Box</Box>
        </Content>
      </Container>
    </Section>
  ))
  .add('Button', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Button
          </Title>

          <Subtitle>
            The classic <b>button</b>, in different colors, sizes, and states
          </Subtitle>

          <Meta colors sizes />

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
        </Content>
      </Container>
    </Section>
  ))
  .add('Notification', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Notification
          </Title>

          <Subtitle>
            Bold <b>notification</b> blocks, to alert your users of something
          </Subtitle>

          <Meta colors />

          <hr />

          <p>
            The <b>button</b> is an essential element of any design. It's meant to look and behave as an <b>interactive</b> element of your page.
          </p>

          <Columns>
            <Column isHalf>
              <Notification>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Notification>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
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
              <Notification isPrimary>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
              <Notification isLink>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
              <Notification isInfo>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
              <Notification isSuccess>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
              <Notification isWarning>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
              <Notification isDanger>
                <Delete />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
              </Notification>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Notification isPrimary>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
                  <Notification isLink>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
                  <Notification isInfo>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
                  <Notification isSuccess>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
                  <Notification isWarning>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
                  <Notification isDanger>
                    <Delete />

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
                  </Notification>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Tag', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Tags
          </Title>

          <Subtitle>
            Small tag labels to insert anywhere
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <p>
            By default, a <b>tag</b> is a 1.5rem high label.
          </p>

          <Tag>Tag label</Tag>

          <hr />

          <Title is4>
            Colors
          </Title>

          <p>
            Like with buttons, there are <b>10 different</b> <b>colors</b> available.
          </p>

          <Tag isBlack>Black</Tag>
          <Tag isDark>Dark</Tag>
          <Tag isLight>Light</Tag>
          <Tag isWhite>White</Tag>
          <Tag isPrimary>Primary</Tag>
          <Tag isLink>Link</Tag>
          <Tag isInfo>Info</Tag>
          <Tag isSuccess>Success</Tag>
          <Tag isWarning>Warning</Tag>
          <Tag isDanger>Danger</Tag>

        </Content>
      </Container>
    </Section>
  ))
