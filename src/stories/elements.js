import React from 'react'

import { storiesOf } from '@storybook/react'

import Box from '../elements/Box'
import Button from '../elements/Button'
import Container from '../layout/Container'
import Content from '../elements/Content'
import Control from '../elements/Control'
import Field from '../elements/Field'
import Delete from '../elements/Delete'
import Notification from '../elements/Notification'
import Subtitle from '../elements/Subtitle'
import Tag from '../elements/Tag'
import Tags from '../elements/Tags'
import Title from '../elements/Title'

const loremIpsum = () => (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.<b>Pellentesque risus mi</b>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit</p>
)

class Meta extends React.Component {
  render () {
    const {
      colors,
      sizes
    } = this.props

    return (
      <Field isGrouped isGroupedMultiline>
        <Control>
          <Tags hasAddons>
            <Tag>Colors</Tag>
            {colors ? <Tag isSuccess>Yes</Tag> : <Tag isDanger>No</Tag>}
          </Tags>
        </Control>

        <Control>
          <Tags hasAddons>
            <Tag>Sizes</Tag>
            {sizes ? <Tag isSuccess href={sizes}>Yes</Tag> : <Tag isDanger>No</Tag>}
          </Tags>
        </Control>

        <Control>
          <Tag>Variables</Tag>
        </Control>
      </Field>
    )
  }
}

storiesOf('Elements', module)
  .add('Box', () => (
    <Container>
      <Content>
        <Title>
          Box
        </Title>
        <Subtitle>
          A white <b>box</b> to contain other elements
        </Subtitle>
        <p>
          The <code>.box</code> element is simply a container with a shadow, a border, a radius, and some padding.
          For example, you can include a media object:
        </p>
        <Meta />

        <hr />

        <Box>Box</Box>
      </Content>
    </Container>
  ))
  .add('Button', () => (
    <Container>
      <Content>
        <Title>
          Button
        </Title>
        <Subtitle>
          The classic <b>button</b>, in different colors, sizes, and states
        </Subtitle>
        <p>
          The <b>button</b> is an essential element of any design. It's meant to look and behave as an <b>interactive</b> element of your page.
        </p>
        <Meta colors sizes />

        <hr />

        <Button>Button</Button>

        <hr />

        <Title>Colors</Title>

        <Button isWhite>White</Button>
        <Button isLight>Light</Button>
        <Button isDark>Dark</Button>
        <Button isBlack>Black</Button>
        <Button isText>Text</Button>
        <Button isPrimary>Primary</Button>
        <Button isLink>Link</Button>
        <Button isInfo>Info</Button>
        <Button isSuccess>Success</Button>
        <Button isWarning>Warning</Button>
        <Button isDanger>Danger</Button>
      </Content>
    </Container>
  ))
  .add('Notification', () => (
    <Container>
      <Content>
        <Title>
          Notification
        </Title>
        <Subtitle>
          Bold <b>notification</b> blocks, to alert your users of something
        </Subtitle>
        <p>
          The <b>button</b> is an essential element of any design. It's meant to look and behave as an <b>interactive</b> element of your page.
        </p>
        <Meta colors />

        <hr />

        <Notification>
          <Delete />
          {loremIpsum()}
        </Notification>

        <hr />

        <Title>Colors</Title>

        <Notification isPrimary>
          <Delete />
          {loremIpsum()}
        </Notification>
        <Notification isLink>
          <Delete />
          {loremIpsum()}
        </Notification>
        <Notification isInfo>
          <Delete />
          {loremIpsum()}
        </Notification>
        <Notification isSuccess>
          <Delete />
          {loremIpsum()}
        </Notification>
        <Notification isWarning>
          <Delete />
          {loremIpsum()}
        </Notification>
        <Notification isDanger>
          <Delete />
          {loremIpsum()}
        </Notification>
      </Content>
    </Container>
  ))
  .add('Tag', () => (
    <Container>
      <Content>
        <Title>
          Tags
        </Title>
        <Subtitle>
          Small tag labels to insert anywhere
        </Subtitle>
        <Meta colors sizes />

        <hr />

        <Tag>Tag label</Tag>

        <hr />

        <Title>Colors</Title>

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
  ))
