import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Button,
  Container,
  Content,
  Control,
  Field,
  Level,
  Section,
  Title,
  Subtitle
} from '../../../index.js'

export default function LayoutMediaObject ({
  location: { pathname }
}) {
  return (
    <>
      <Nav pathname={pathname} />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Media Object
            </Title>

            <Subtitle>
              The famous <b>media object</b> prevalent in social media interfaces, but useful in any context
            </Subtitle>

            <hr />

            <p>
              The <a href='http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code'>media object</a> is a UI element perfect for repeatable and nestable content.
            </p>

            <Media>
              <Media.Left>
                <Image is64x64 src='http://via.placeholder.com/128x128.png' />
              </Media.Left>

              <Media.Content>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </Content>

                <Level isMobile>
                  <Level.Left>
                    <Level.Item>
                      <Icon>
                        <Icon.Svg icon={solidIcon.reply} />
                      </Icon>
                    </Level.Item>

                    <Level.Item>
                      <Icon>
                        <Icon.Svg icon={solidIcon.retweet} />
                      </Icon>
                    </Level.Item>

                    <Level.Item>
                      <Icon>
                        <Icon.Svg icon={solidIcon.heart} />
                      </Icon>
                    </Level.Item>
                  </Level.Left>
                </Level>
              </Media.Content>

              <Media.Right>
                <Delete />
              </Media.Right>
            </Media>

            <Code language='jsx'>
              {indent`
                <Media>
                  <Media.Left>
                    <Image is64x64 src='http://via.placeholder.com/128x128.png' />
                  </Media.Left>

                  <Media.Content>
                    <Content>
                      <p>
                        <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                      </p>
                    </Content>

                    <Level isMobile>
                      <Level.Left>
                        <Level.Item>
                          <Icon>
                            <Icon.Svg icon={solidIcon.reply} />
                          </Icon>
                        </Level.Item>

                        <Level.Item>
                          <Icon>
                            <Icon.Svg icon={solidIcon.retweet} />
                          </Icon>
                        </Level.Item>

                        <Level.Item>
                          <Icon>
                            <Icon.Svg icon={solidIcon.heart} />
                          </Icon>
                        </Level.Item>
                      </Level.Left>
                    </Level>
                  </Media.Content>

                  <Media.Right>
                    <Delete />
                  </Media.Right>
                </Media>
              `}
            </Code>

            <p>
              You can include <em>any</em> other Trunx component, like inputs, textareas, icons, buttons... or even a <b>nav bar</b>.
            </p>

            <Media>
              <Media.Left>
                <Image is64x64 src='http://via.placeholder.com/128x128.png' />
              </Media.Left>

              <Media.Content>
                <Field>
                  <Control>
                    <Textarea placeholder='Add a comment' />
                  </Control>
                </Field>

                <Level>
                  <Level.Left>
                    <Level.Item>
                      <Button isInfo>Submit</Button>
                    </Level.Item>
                  </Level.Left>

                  <Level.Right>
                    <Level.Item>
                      <Checkbox>Press enter to submit</Checkbox>
                    </Level.Item>
                  </Level.Right>
                </Level>
              </Media.Content>

              <Media.Right>
                <Delete />
              </Media.Right>
            </Media>

            <Code language='jsx'>
              {indent`
                <Media>
                  <Media.Left>
                    <Image is64x64 src='http://via.placeholder.com/128x128.png' />
                  </Media.Left>

                  <Media.Content>
                    <Field>
                      <Control>
                        <Textarea placeholder='Add a comment' />
                      </Control>
                    </Field>

                    <Level>
                      <Level.Left>
                        <Level.Item>
                          <Button isInfo>Submit</Button>
                        </Level.Item>
                      </Level.Left>

                      <Level.Right>
                        <Level.Item>
                          <Checkbox>Press enter to submit</Checkbox>
                        </Level.Item>
                      </Level.Right>
                    </Level>
                  </Media.Content>

                  <Media.Right>
                    <Delete />
                  </Media.Right>
                </Media>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
