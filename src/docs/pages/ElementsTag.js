import React from 'react'

import {
  B,
  Column,
  Columns,
  Container,
  Content,
  Field,
  P,
  Section,
  Subtitle,
  Tag,
  Tags,
  Title
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ElementsTag ({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Tags</Title>

            <Subtitle>
              Small <B>tag labels</B> to insert anywhere
            </Subtitle>

            <hr />

            <Columns>
              <Column is4>
                By default, a <B>tag</B> is a 1.5rem high label.
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

            <Title is4>Colors</Title>

            <Columns>
              <Column is4>
                Like with buttons, there are <B>10 different</B> <B>colors</B>{' '}
                available.
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

            <Columns>
              <Column is4>
                You can choose the <B>light version</B> of a color.
              </Column>

              <Column is2>
                <Field>
                  <Tag isPrimary isLight>
                    Primary
                  </Tag>
                </Field>

                <Field>
                  <Tag isLink isLight>
                    Link
                  </Tag>
                </Field>

                <Field>
                  <Tag isInfo isLight>
                    Info
                  </Tag>
                </Field>

                <Field>
                  <Tag isSuccess isLight>
                    Success
                  </Tag>
                </Field>

                <Field>
                  <Tag isWarning isLight>
                    Warning
                  </Tag>
                </Field>

                <Field>
                  <Tag isDanger isLight>
                    Danger
                  </Tag>
                </Field>
              </Column>

              <Column is6>
                <Code language='jsx'>
                  {indent`
                    <Tag isPrimary isLight>Primary</Tag>
                    <Tag isLink isLight>Link</Tag>
                    <Tag isInfo isLight>Info</Tag>
                    <Tag isSuccess isLight>Success</Tag>
                    <Tag isWarning isLight>Warning</Tag>
                    <Tag isDanger isLight>Danger</Tag>
                  `}
                </Code>
              </Column>
            </Columns>
            <hr />

            <Title is4>Sizes</Title>

            <Columns>
              <Column is4>
                <Content>
                  <P>
                    The tag comes in <B>3 different</B> sizes.
                  </P>

                  <P>
                    While the default size is the <B>normal</B> one, the{' '}
                    <code>isNormal</code> modifier prop exists in case you need
                    to reset the tag to its normal size. The tag comes in{' '}
                    <B>3 different</B> sizes.
                  </P>
                </Content>
              </Column>

              <Column is2>
                <Field>
                  <Tag isLink isNormal>
                    Normal
                  </Tag>
                </Field>

                <Field>
                  <Tag isPrimary isMedium>
                    Medium
                  </Tag>
                </Field>

                <Field>
                  <Tag isInfo isLarge>
                    Large
                  </Tag>
                </Field>
              </Column>

              <Column is6>
                <Code language='jsx'>
                  {indent`
                    <Tag isLink isNormal>Normal</Tag>
                    <Tag isPrimary isMedium>Medium</Tag>
                    <Tag isInfo isLarge>Large</Tag>
                  `}
                </Code>
              </Column>
            </Columns>

            <p>
              You can change the size of <b>all</b> tags at once:
            </p>

            <Columns>
              <Column>
                <Tags areMedium>
                  <Tag>All</Tag>
                  <Tag>Medium</Tag>
                  <Tag>Size</Tag>
                </Tags>
              </Column>

              <Column>
                <Code language='jsx'>
                  {indent`
                    <Tags areMedium>
                      <Tag>All</Tag>
                      <Tag>Medium</Tag>
                      <Tag>Size</Tag>
                    </Tags>
                  `}
                </Code>
              </Column>
            </Columns>

            <Columns>
              <Column>
                <Tags areLarge>
                  <Tag>All</Tag>
                  <Tag>Large</Tag>
                  <Tag>Size</Tag>
                </Tags>
              </Column>

              <Column>
                <Code language='jsx'>
                  {indent`
                    <Tags areLarge>
                      <Tag>All</Tag>
                      <Tag>Large</Tag>
                      <Tag>Size</Tag>
                    </Tags>
                  `}
                </Code>
              </Column>
            </Columns>

            <P>
              You can however keep the original size of a <B>subset</B> of tags,
              simply by applying one of its modifier class:
            </P>

            <Columns>
              <Column>
                <Tags areMedium>
                  <Tag>Medium</Tag>
                  <Tag isNormal>Normal</Tag>
                  <Tag>Medium</Tag>
                  <Tag isLarge>Large</Tag>
                  <Tag>Medium</Tag>
                </Tags>
              </Column>

              <Column>
                <Code language='jsx'>
                  {indent`
                    <Tags areMedium>
                      <Tag>Medium</Tag>
                      <Tag isNormal>Normal</Tag>
                      <Tag>Medium</Tag>
                      <Tag isLarge>Large</Tag>
                      <Tag>Medium</Tag>
                    </Tags>
                  `}
                </Code>
              </Column>
            </Columns>

            <hr />

            <Title is4>List of tags</Title>

            <P>
              You can <B>attach tags together</B> with the{' '}
              <code>hasAddons</code> modifier.
            </P>

            <Columns>
              <Column>
                <Tags hasAddons>
                  <Tag>Package</Tag>
                  <Tag isPrimary>Trunx</Tag>
                </Tags>
              </Column>

              <Column>
                <Code language='jsx'>
                  {indent`
                    <Tags hasAddons>
                      <Tag>Package</Tag>
                      <Tag isPrimary>Trunx</Tag>
                    </Tags>
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
