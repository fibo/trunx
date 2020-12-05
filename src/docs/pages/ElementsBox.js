import solidIcon from 'fa-svg-icon/solid'
import React from 'react'

import {
  Box,
  Container,
  Content,
  Level,
  Icon,
  Image,
  Media,
  Section,
  Subtitle,
  Title,
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ElementsBox({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Box</Title>

            <Subtitle>
              A white <b>box</b> to contain other elements
            </Subtitle>

            <hr />

            <p>
              The <code>box</code> element is simply a container with a shadow,
              a border, a radius, and some padding. For example, you can include
              a media object:
            </p>

            <Box>
              <Media>
                <Media.Left>
                  <Image is64x64 src='http://via.placeholder.com/128x128.png' />
                </Media.Left>

                <Media.Content>
                  <Content>
                    <p>
                      <strong>John Smith</strong> <small>@johnsmith</small>{' '}
                      <small>31m</small>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean efficitur sit amet massa fringilla egestas. Nullam
                      condimentum luctus turpis.
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
