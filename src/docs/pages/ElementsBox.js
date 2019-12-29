import solidIcon from 'fa-svg-icon/solid'
import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Box,
  Column,
  Columns,
  Container,
  Content,
  Level,
  Icon,
  Image,
  Media,
  Notification,
  Section,
  Subtitle,
  Title
} from '../../../index.js'

export default function ElementsBox ({
  location: { pathname }
}) {
  return (
    <>
      <Nav pathname={pathname} />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Box
            </Title>

            <Subtitle>
              A white <b>box</b> to contain other elements
            </Subtitle>

            <hr />

            <p>
              The <code>box</code> element is simply a container with a shadow, a border, a radius, and some padding.
              For example, you can include a media object:
            </p>

            <Box hasBackgroundLight>
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
              </Media>
            </Box>

            <Code language='jsx'>
              {indent`
              <Box>
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
                </Media>
              </Box>
            `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
