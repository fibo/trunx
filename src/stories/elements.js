import React from 'react'

import { storiesOf } from '@storybook/react'
import solidIcon from 'fa-svg-icon/solid'

import Box from '../component/Box'
import Button from '../component/Button'
import Buttons from '../component/Buttons'
import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import Delete from '../component/Delete'
import Field from '../component/Field'
import Icon from '../component/Icon'
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

          <p>
            The <code>Button</code> component will render as
          </p>

          <ul>
            <li>
              <code>{'<a>'}</code> anchor links, if there is an <code>href</code> prop
            </li>

            <li>
              <code>{'<button>'}</code> form buttons
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

                <Button type='submit' defaultValue='Submit input' />

                <Button type='reset' defaultValue='Reset input' />
              </Buttons>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Buttons>
                    <Button href='#'>Anchor</Button>

                    <Button>Button</Button>

                    <Button type='submit' defaultValue='Submit input' />

                    <Button type='reset' defaultValue='Reset input' />
                  </Buttons>
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
  ))
  .add('Content', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Content
          </Title>

          <Subtitle>
            A single class to handle <b>WYSIWYG</b> generated content, where only <b>HTML tags</b> are available
          </Subtitle>

          <Meta sizes />

          <hr />

          <p>
            When you can't use the CSS classes you want, or when you just want to directly use HTML tags, use <code>Content</code> as container. It can handle almost any HTML tag:
          </p>

          <ul>
            <li>
              <code>{'<p>'}</code> paragraphs
            </li>

            <li>
              <code>{'<ul>'}</code> <code>{'<ol>'}</code> <code>{'<dl>'}</code> lists
            </li>

            <li>
              <code>{'<h1>'}</code> to <code>{'<h6>'}</code> headings
            </li>

            <li>
              <code>{'<blockquote>'}</code> quotes
            </li>

            <li>
              <code>{'<em>'}</code> and <code>{'<strong>'}</code>
            </li>

            <li>
              <code>{'<table>'}</code> <code>{'<tr>'}</code> <code>{'<th>'}</code> <code>{'<td>'}</code> tables
            </li>
          </ul>
        </Content>
      </Container>
    </Section>
  ))
  .add('Delete', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Delete
          </Title>

          <Subtitle>
            A versatile <b>delete</b> cross
          </Subtitle>

          <Meta sizes />

          <hr />

          <p>
            The <code>Delete</code> component is a stand-alone element that can be used in different contexts.
          </p>

          <Columns>
            <Column isHalf>
              <Delete />
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Delete />
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Icon', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Icon
          </Title>

          <Subtitle>
            Trunx is compatible with <b>all icon font libraries</b>: <a href='https://fontawesome.com/'>Font Awesome 5</a>, <a href='http://fontawesome.io/'>Font Awesome 4</a>, <a href='https://materialdesignicons.com/'>Material Design Icons</a>, <a href='https://useiconic.com/open'>Open Iconic</a>, <a href='https://ionicons.com/'>Ionicons</a> etc.
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <p>
            The <code>Icon</code> component is a container for any type of <b>icon font</b>.
            If you want to import icons in the classic way, please refer to <a href='https://bulma.io/documentation/elements/icon/'>Icon section in official Bulma documentation</a>.
            You will be able to use a code like the following:
          </p>

          <Code language='jsx'>
            {indent`
              <Icon>
                <i className="fas fa-home"></i>
              </Icon>
            `}
          </Code>

          <p>
            If you think that <b>free</b> Font AWesome 5 is enough and you would like SVG icons React components,
            then you can choose this approach described in this documentation page.
            Install <a href='http://g14n.info/fa-svg-icon/'>fa-svg-icon</a> package: it provides free Font-Awesome SVG icons.
          </p>

          <pre>
            <code>
              {indent`
                npm install fa-svg-icon
              `}
            </code>
          </pre>

          <p>
            Just as an example, import <b>solid</b> icons only.
            Note that also <b>brands</b> and <b>regular</b> icons are available.
            To save even more bytes in your build you could also import a single icon.
          </p>

          <Code language='jsx'>
            {indent`
              import solidIcon from 'fa-svg-icon/solid'
            `}
          </Code>

          <p>
            Now you can create all free SVG Font Awesome 5 icons with a snippet like the following.
          </p>

          <Columns>
            <Column isHalf>
              <Icon>
                <Icon.Svg icon={solidIcon.home} />
              </Icon>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Icon>
                    <Icon.Svg icon={solidIcon.home} />
                  </Icon>
                `}
              </Code>
            </Column>
          </Columns>

          <p>
            By default, the <code>Icon</code> component will take up exactly 1.5rem x 1.5rem. The icon itself is sized accordingly to the icon library you're using. For example, Font Awesome 5 icons will <b>inherit</b> the font size.
          </p>

          <hr />

          <Title is4>
            Colors
          </Title>

          <p>
            Since icon fonts are simply <b>text</b>, you can use the text color modifiers to change the icon's color.
          </p>

          <Columns>
            <Column isHalf>
              <Icon hasTextInfo>
                <Icon.Svg icon={solidIcon.infoCircle} />
              </Icon>

              <Icon hasTextSuccess>
                <Icon.Svg icon={solidIcon.checkSquare} />
              </Icon>

              <Icon hasTextWarning>
                <Icon.Svg icon={solidIcon.exclamationTriangle} />
              </Icon>

              <Icon hasTextDanger>
                <Icon.Svg icon={solidIcon.ban} />
              </Icon>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Icon hasTextInfo>
                    <Icon.Svg icon={solidIcon.infoCircle} />
                  </Icon>

                  <Icon hasTextSuccess>
                    <Icon.Svg icon={solidIcon.checkSquare} />
                  </Icon>

                  <Icon hasTextWarning>
                    <Icon.Svg icon={solidIcon.exclamationTriangle} />
                  </Icon>

                  <Icon hasTextDanger>
                    <Icon.Svg icon={solidIcon.ban} />
                  </Icon>
                `}
              </Code>
            </Column>
          </Columns>

          <Title is4>
            Sizes
          </Title>

          <p>
            The <code>Icon</code> component comes in <b>4 sizes</b>.
            The <code>Icon.Svg</code> component has a <code>size</code> prop which defaults to <code>1em</code>.
          </p>

          <Columns>
            <Column isHalf>
              <Icon isSmall>
                <Icon.Svg icon={solidIcon.home} />
              </Icon>

              <Icon>
                <Icon.Svg icon={solidIcon.home} />
              </Icon>

              <Icon isMedium>
                <Icon.Svg icon={solidIcon.home} size='2em' />
              </Icon>

              <Icon isLarge>
                <Icon.Svg icon={solidIcon.home} size='3em' />
              </Icon>
            </Column>

            <Column isHalf>
              <Code language='jsx'>
                {indent`
                  <Icon isSmall>
                    <Icon.Svg icon={solidIcon.home} />
                  </Icon>

                  <Icon>
                    <Icon.Svg icon={solidIcon.home} />
                  </Icon>

                  <Icon isMedium>
                    <Icon.Svg icon={solidIcon.home} size='2em' />
                  </Icon>

                  <Icon isLarge>
                    <Icon.Svg icon={solidIcon.home} size='3em' />
                  </Icon>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
  .add('Image', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Image
          </Title>

          <Subtitle />

          <Meta colors sizes />

          <hr />

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
            Small <b>tag labels</b> to insert anywhere
          </Subtitle>

          <Meta colors sizes />

          <hr />

          <Columns>
            <Column is4>
              By default, a <b>tag</b> is a 1.5rem high label.
            </Column>

            <Column is2>
              <Tag>Tag label</Tag>
            </Column>

            <Column is6>
              <Code language='jsx'>
                {indent`
                  <Tag>Tag label</Tag>
                `}
              </Code>
            </Column>
          </Columns>

          <hr />

          <Title is4>
            Colors
          </Title>

          <Columns>
            <Column is4>
              Like with buttons, there are <b>10 different</b> <b>colors</b> available.
            </Column>

            <Column is2>
              <Field>
                <Tag isBlack>Black</Tag>
              </Field>

              <Field>
                <Tag isDark>Dark</Tag>
              </Field>

              <Field>
                <Tag isLight>Light</Tag>
              </Field>

              <Field>
                <Tag isWhite>White</Tag>
              </Field>

              <Field>
                <Tag isPrimary>Primary</Tag>
              </Field>

              <Field>
                <Tag isLink>Link</Tag>
              </Field>

              <Field>
                <Tag isInfo>Info</Tag>
              </Field>

              <Field>
                <Tag isSuccess>Success</Tag>
              </Field>

              <Field>
                <Tag isWarning>Warning</Tag>
              </Field>

              <Field>
                <Tag isDanger>Danger</Tag>
              </Field>
            </Column>

            <Column is6>
              <Code language='jsx'>
                {indent`
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
                `}
              </Code>
            </Column>
          </Columns>

          <Title is4>
            Sizes
          </Title>

          <Columns>
            <Column is4>
              And <b>2 additional</b> sizes
            </Column>

            <Column is2>
              <Field>
                <Tag isPrimary isMedium>Medium</Tag>
              </Field>

              <Field>
                <Tag isInfo isLarge>Large</Tag>
              </Field>
            </Column>

            <Column is6>
              <Code language='jsx'>
                {indent`
                  <Tag isPrimary isMedium>Medium</Tag>
                  <Tag isInfo isLarge>Large</Tag>
                `}
              </Code>
            </Column>
          </Columns>
        </Content>
      </Container>
    </Section>
  ))
