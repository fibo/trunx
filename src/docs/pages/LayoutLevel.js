import React from 'react'

import {
  Button,
  Container,
  Content,
  Control,
  Field,
  Level,
  Heading,
  Input,
  Section,
  Title,
  Subtitle
} from '../../../index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function LayoutLevel ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Level
            </Title>

            <Subtitle>
              A multi-purpose <b>horizontal level</b>, which can contain almost any other element
            </Subtitle>

            <hr />

            <p>
              The <b>structure</b> of a level is the following:
            </p>

            <ul>
              <li>
                <code>Level</code>: main container

                <ul>
                  <li>
                    <code>Level.Left</code> for the left side
                  </li>

                  <li>
                    <code>Level.Right</code> for the right side

                    <ul>
                      <li>
                        <code>Level.Left</code> for the left side
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              In a <code>Level.Item</code>, you can then insert almost <em>anything</em> you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Trunx <code>Level</code>, they will always be <b>vertically centered</b>.
            </p>

            <Level>
              <Level.Left>
                <Level.Item>
                  <Subtitle is5>
                    <strong>123</strong> posts
                  </Subtitle>
                </Level.Item>

                <Level.Item>
                  <Field hasAddons>
                    <Control>
                      <Input type='text' placeholder='Find a post' />
                    </Control>

                    <Control>
                      <Button>Search</Button>
                    </Control>
                  </Field>
                </Level.Item>
              </Level.Left>

              <Level.Right>
                <Level.Item>
                  <strong>All</strong>
                </Level.Item>

                <Level.Item>
                  <a>Published</a>
                </Level.Item>

                <Level.Item>
                  <a>Drafts</a>
                </Level.Item>

                <Level.Item>
                  <a>Deleted</a>
                </Level.Item>

                <Level.Item>
                  <Button isSuccess>New</Button>
                </Level.Item>
              </Level.Right>
            </Level>

            <Code language='jsx'>
              {indent`
                <Level>
                  <Level.Left>
                    <Level.Item>
                      <Subtitle is5>
                        <strong>123</strong> posts
                      </Subtitle>
                    </Level.Item>

                    <Level.Item>
                      <Field hasAddons>
                        <Control>
                          <Input type='text' placeholder='Find a post'>
                        </Control>

                        <Control>
                          <Button>Search</Button>
                        </Control>
                      </Field>
                    </Level.Item>
                  </Level.Left>

                  <Level.Right>
                    <Level.Item>
                      <strong>All</strong>
                    </Level.Item>

                    <Level.Item>
                      <a>Published</a>
                    </Level.Item>

                    <Level.Item>
                      <a>Drafts</a>
                    </Level.Item>

                    <Level.Item>
                      <a>Deleted</a>
                    </Level.Item>

                    <Level.Item>
                      <Button isSuccess>New</Button>
                    </Level.Item>
                  </Level.Right>
                </Level>
              `}
            </Code>

            <hr />

            <Title is4>
              Centered level
            </Title>

            <p>
              If you want a <b>centered level</b>, you can use as many <code>Level.Item</code> as you want, as long as they are <b>direct</b> children of the <code>Level</code> component.
            </p>

            <Level>
              <Level.Item hasTextCentered>
                <div>
                  <Heading>Tweets</Heading>

                  <Title>3,456</Title>
                </div>
              </Level.Item>

              <Level.Item hasTextCentered>
                <div>
                  <Heading>Following</Heading>

                  <Title>123</Title>
                </div>
              </Level.Item>

              <Level.Item hasTextCentered>
                <div>
                  <Heading>Followers</Heading>

                  <Title>456K</Title>
                </div>
              </Level.Item>

              <Level.Item hasTextCentered>
                <div>
                  <Heading>Likes</Heading>

                  <Title>789</Title>
                </div>
              </Level.Item>
            </Level>

            <Code language='jsx'>
              {indent`
                <Level>
                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Tweets</Heading>

                      <Title>3,456</Title>
                    </div>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Following</Heading>

                      <Title>123</Title>
                    </div>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Followers</Heading>

                      <Title>456K</Title>
                    </div>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Likes</Heading>

                      <Title>789</Title>
                    </div>
                  </Level.Item>
                </Level>
              `}
            </Code>

            <hr />

            <Level>
              <Level.Item hasTextCentered>
                <a>Home</a>
              </Level.Item>

              <Level.Item hasTextCentered>
                <a>Menu</a>
              </Level.Item>

              <Level.Item hasTextCentered>
                <img src='https://bulma.io/images/bulma-type.png' alt='' style={{ height: '30px' }} />
              </Level.Item>

              <Level.Item hasTextCentered>
                <a>Reservations</a>
              </Level.Item>

              <Level.Item hasTextCentered>
                <a>Contact</a>
              </Level.Item>
            </Level>

            <Code language='jsx'>
              {indent`
                <Level>
                  <Level.Item hasTextCentered>
                    <a>Home</a>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <a>Menu</a>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <img src='https://bulma.io/images/bulma-type.png' alt='' style={{height: '30px;'}} />
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <a>Reservations</a>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <a>Contact</a>
                  </Level.Item>
                </Level>
              `}
            </Code>

            <hr />

            <Title is4>
              Mobile level
            </Title>

            <p>
              By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the <code>isMobile</code> prop on the <code>Level</code> component.
            </p>

            <Level isMobile>
              <Level.Item hasTextCentered>
                <div>
                  <Heading>Tweets</Heading>

                  <Title>3,456</Title>
                </div>
              </Level.Item>

              <Level.Item hasTextCentered>
                <div>
                  <Heading>Following</Heading>

                  <Title>123</Title>
                </div>
              </Level.Item>

              <Level.Item hasTextCentered>
                <div>
                  <Heading>Followers</Heading>

                  <Title>456K</Title>
                </div>
              </Level.Item>

              <Level.Item hasTextCentered>
                <div>
                  <Heading>Likes</Heading>

                  <Title>789</Title>
                </div>
              </Level.Item>
            </Level>

            <Code language='jsx'>
              {indent`
                <Level isMobile>
                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Tweets</Heading>

                      <Title>3,456</Title>
                    </div>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Following</Heading>

                      <Title>123</Title>
                    </div>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Followers</Heading>

                      <Title>456K</Title>
                    </div>
                  </Level.Item>

                  <Level.Item hasTextCentered>
                    <div>
                      <Heading>Likes</Heading>

                      <Title>789</Title>
                    </div>
                  </Level.Item>
                </Level>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
