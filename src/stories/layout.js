import React, { Fragment } from 'react'

import { storiesOf } from '@storybook/react'
import brandsIcon from 'fa-svg-icon/brands'
import solidIcon from 'fa-svg-icon/solid'

import Button from '../component/Button'
import Checkbox from '../component/Checkbox'
import Container from '../component/Container'
import Content from '../component/Content'
import Control from '../component/Control'
import Delete from '../component/Delete'
import Field from '../component/Field'
import Footer from '../component/Footer'
import Heading from '../component/Heading'
import Hero from '../component/Hero'
import Image from '../component/Image'
import Icon from '../component/Icon'
import Input from '../component/Input'
import Level from '../component/Level'
import Li from '../component/Li'
import Media from '../component/Media'
import Navbar from '../component/Navbar'
import Notification from '../component/Notification'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Tabs from '../component/Tabs'
import Textarea from '../component/Textarea'
import Tile from '../component/Tile'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'
import Meta from './Meta'

storiesOf('Layout', module)
  .add('Container', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Container
          </Title>

          <Subtitle>
            A simple <b>container</b> to center your content horizontally
          </Subtitle>

          <hr />

          <p>
            The <code>Container</code> component can be used in any context, but mostly as a <b>direct child</b> of either:

          </p>

          <ul>
            <li>
              <code>Navbar</code>
            </li>

            <li>
              <code>Hero</code>
            </li>

            <li>
              <code>Section</code>
            </li>

            <li>
              <code>Footer</code>
            </li>
          </ul>

          <p>
            The containers <b>width</b> for each <b>breakpoint</b> is the result of: <code>$device - (2 * $gap)</code>. The <code>$gap</code> variable has a default value of <code>32px</code> but can be modified.

            This is how the container will behave:
          </p>

          <ul>
            <li>
              on <code>$desktop</code> it will have a maximum width of <b>960px</b>.
            </li>

            <li>
              on <code>$widescreen</code> it will have a maximum width of <b>1152px</b>.
            </li>

            <li>
              on <code>$fullhd</code> it will have a maximum width of <b>1344px</b>.
            </li>
          </ul>

          <p>
            The values <b>960</b>, <b>1152</b> and <b>1344</b> have been chosen because they are divisible by both <b>12</b> and <b>16</b>.
          </p>

          <Container>
            <Notification>
              This container is <strong>centered</strong> on desktop.
            </Notification>
          </Container>

          <Code language='jsx'>
            {indent`
              <Container>
                <Notification>
                  This container is <strong>centered</strong> on desktop.
                </Notification>
              </Container>
            `}
          </Code>

          <hr />

          <Title is4>
            Fluid container
          </Title>

          <p>
            If you don't want to have a maximum width but want to keep the 32px margin on the left and right sides, add the <code>is-fluid</code> modifier:
          </p>

          <Container isFluid>
            <Notification>
              This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
            </Notification>
          </Container>

          <Code language='jsx'>
            {indent`
              <Container isFluid>
                <Notification>
                  This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport size.
                </Notification>
              </Container>
            `}
          </Code>

          <Title is4>
            Breakpoint containers
          </Title>

          <p>
      With the two props <code>isWidescreen</code> and <code>isFullhd</code>, you can have a <em>fullwidth</em> container <b>until</b> those specific breakpoints.
          </p>

          <Container isWidescreen>
            <Notification>
            This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
            </Notification>
          </Container>

          <Code language='jsx'>
            {indent`
              <Container isWidescreen>
                <Notification>
                This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
                </Notification>
              </Container>
            `}
          </Code>

          <Container isFullhd>
            <Notification>
            This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
            </Notification>
          </Container>

          <Code language='jsx'>
            {indent`
              <Container isFullhd>
                <Notification>
                This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
                </Notification>
              </Container>
            `}
          </Code>

        </Content>
      </Container>
    </Section>
  ))
  .add('Level', () => (
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
  ))
  .add('Media Object', () => (
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
  ))
  .add('Hero', () => (
    <Fragment>
      <Section>
        <Container>
          <Content>
            <Title is2>
              Hero
            </Title>

            <Subtitle>
              An imposing <b>hero</b> banner to showcase something
            </Subtitle>

            <Meta colors sizes />

            <hr />

            <p>
              The hero component allows you to add a <b>full width banner</b> to your webpage, which can optionally cover the full height of the page as well.
            </p>

            <p>
              The basic requirement of this component are:
            </p>

            <ul>
              <li>
                <code>Hero</code> as the main container
                <ul>
                  <li>
                    <code>Hero.Body</code> as a direct child, in which you can put all your content
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              For the full height hero to work, you will also need a <code>Hero.Head</code> and a <code>Hero.Foot</code> component.
            </p>
          </Content>
        </Container>
      </Section>

      <Section isFullwidth>
        <Hero>
          <Hero.Body>
            <Container>
              <Title>Hero title</Title>
              <Subtitle>Hero subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Container>
          <Code language='jsx'>
            {indent`
              <Hero>
                <Hero.Body>
                  <Container>
                    <Title>Hero title</Title>
                    <Subtitle>Hero subtitle</Subtitle>
                  </Container>
                </Hero.Body>
              </Hero>
            `}
          </Code>
        </Container>
      </Section>

      <Section>
        <Container>
          <Content>
            <Title is4>
              Colors
            </Title>

            <p>
              As with buttons, you can choose one of the <b>7 different colors</b>:
            </p>
          </Content>
        </Container>
      </Section>

      <Section isFullwidth>
        <Hero isPrimary>
          <Hero.Body>
            <Container>
              <Title>Primary title</Title>
              <Subtitle>Primary subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Container>
          <Code language='jsx'>
            {indent`
              <Hero isPrimary>
                <Hero.Body>
                  <Container>
                    <Title>Primary title</Title>
                    <Subtitle>Primary subtitle</Subtitle>
                  </Container>
                </Hero.Body>
              </Hero>
            `}
          </Code>
        </Container>

        <Hero isInfo>
          <Hero.Body>
            <Container>
              <Title>Info title</Title>
              <Subtitle>Info subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isSuccess>
          <Hero.Body>
            <Container>
              <Title>Success title</Title>
              <Subtitle>Success subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isWarning>
          <Hero.Body>
            <Container>
              <Title>Warning title</Title>
              <Subtitle>Warning subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isDanger>
          <Hero.Body>
            <Container>
              <Title>Danger title</Title>
              <Subtitle>Danger subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isLight>
          <Hero.Body>
            <Container>
              <Title>Light title</Title>
              <Subtitle>Light subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isDark>
          <Hero.Body>
            <Container>
              <Title>Dark title</Title>
              <Subtitle>Dark subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>

      <Section>
        <Container>
          <Content>
            <Title is4>
              Gradients
            </Title>

            <p>
              By adding the <code>isBold</code> prop, you can generate a subtle <b>gradient</b>.
            </p>
          </Content>
        </Container>
      </Section>

      <Section isFullwidth>
        <Hero isMedium isPrimary isBold>
          <Hero.Body>
            <Container>
              <Title>Primary bold title</Title>
              <Subtitle>Primary bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Container>
          <Code language='jsx'>
            {indent`
              <Hero isMedium isPrimary isBold>
                <Hero.Body>
                  <Container>
                    <Title>Primary bold title</Title>
                    <Subtitle>Primary bold subtitle</Subtitle>
                  </Container>
                </Hero.Body>
              </Hero>
            `}
          </Code>
        </Container>

        <Hero isMedium isInfo isBold>
          <Hero.Body>
            <Container>
              <Title>Info bold title</Title>
              <Subtitle>Info bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isMedium isSuccess isBold>
          <Hero.Body>
            <Container>
              <Title>Success bold title</Title>
              <Subtitle>Success bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isMedium isWarning isBold>
          <Hero.Body>
            <Container>
              <Title>Warning bold title</Title>
              <Subtitle>Warning bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isMedium isDanger isBold>
          <Hero.Body>
            <Container>
              <Title>Danger bold title</Title>
              <Subtitle>Danger bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isMedium isLight isBold>
          <Hero.Body>
            <Container>
              <Title>Light bold title</Title>
              <Subtitle>Light bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>

        <Hero isMedium isDark isBold>
          <Hero.Body>
            <Container>
              <Title>Dark bold title</Title>
              <Subtitle>Dark bold subtitle</Subtitle>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>

      <Section>
        <Container>
          <Content>
            <Title is4>
              Full height hero
            </Title>

            <Subtitle is6>
              And vertically centered
            </Subtitle>

            <p>
              You can split the hero in <b>3 vertical parts</b>:
            </p>

            <ul>
              <li>
                <code>Hero</code>

                <ul>
                  <li>
                    <code>Hero.Head</code> (always at the top)
                  </li>

                  <li>
                    <code>Hero.Body</code> (always vertically centered)
                  </li>

                  <li>
                    <code>Hero.Foot</code> (always at the bottom)
                  </li>
                </ul>
              </li>
            </ul>

            <p>
              In the following code samples, the <code>brandsIcon</code> variable is created with
            </p>

            <Container>
              <Code language='jsx'>
                {indent`
                  import brandsIcon from 'fa-svg-icon/brands'
                `}
              </Code>
            </Container>
          </Content>
        </Container>
      </Section>

      <Section isFullwidth>
        <Hero isPrimary isMedium>
          <Hero.Body>
            <Container hasTextCentered>
              <Title>Title</Title>
              <Subtitle>Subtitle</Subtitle>
            </Container>
          </Hero.Body>

          <Hero.Foot>
            <Tabs>
              <Container>
                <Li isActive>Overview</Li>
                <Li>Modifiers</Li>
                <Li>Grid</Li>
                <Li>Elements</Li>
                <Li>Components</Li>
                <Li>Layout</Li>
              </Container>
            </Tabs>
          </Hero.Foot>
        </Hero>

        <Container>
          <Code language='jsx'>
            {indent`
              <Hero isPrimary isMedium>
                <Hero.Body>
                  <Container hasTextCentered>
                    <Title>Title</Title>
                    <Subtitle>Subtitle</Subtitle>
                  </Container>
                </Hero.Body>

                <Hero.Foot>
                  <Tabs.Nav>
                    <Tabs.Item isActive>Overview</Tabs.Item>
                    <Tabs.Item>Modifiers</Tabs.Item>
                    <Tabs.Item>Grid</Tabs.Item>
                    <Tabs.Item>Elements</Tabs.Item>
                    <Tabs.Item>Components</Tabs.Item>
                    <Tabs.Item>Layout</Tabs.Item>
                  </Tabs.Nav>
                </Hero.Foot>
              </Hero>
            `}
          </Code>
        </Container>

        <Hero isInfo isLarge>
          <Hero.Head>
            <Navbar>
              <Container>
                <Navbar.Menu>
                  <Navbar.End>
                    <Navbar.Item isActive>Home</Navbar.Item>
                    <Navbar.Item>Examples</Navbar.Item>
                    <Navbar.Item>Documentation</Navbar.Item>
                    <Navbar.Item>
                      <Button isInfo isInverted>
                        <Icon>
                          <Icon.Svg icon={brandsIcon.github} />
                        </Icon>

                        <span>Download</span>
                      </Button>
                    </Navbar.Item>
                  </Navbar.End>
                </Navbar.Menu>
              </Container>
            </Navbar>
          </Hero.Head>

          <Hero.Body>
            <Container hasTextCentered>
              <Title>Title</Title>
              <Subtitle>Subtitle</Subtitle>
            </Container>
          </Hero.Body>

          <Hero.Foot>
            <Tabs.Nav isBoxed isFullwidth>
              <Tabs.Item isActive>Overview</Tabs.Item>
              <Tabs.Item>Modifiers</Tabs.Item>
              <Tabs.Item>Grid</Tabs.Item>
              <Tabs.Item>Elements</Tabs.Item>
              <Tabs.Item>Components</Tabs.Item>
              <Tabs.Item>Layout</Tabs.Item>
            </Tabs.Nav>
          </Hero.Foot>
        </Hero>

        <Container>
          <Code language='jsx'>
            {indent`
              <Hero isInfo isLarge>
                <Hero.Head>
                  <Navbar>
                    <Container>
                      <Navbar.Menu>
                        <Navbar.End>
                          <Navbar.Item isActive>Home</Navbar.Item>
                          <Navbar.Item>Examples</Navbar.Item>
                          <Navbar.Item>Documentation</Navbar.Item>
                          <Navbar.Item>
                            <Button isInfo isInverted>
                              <Icon>
                                <Icon.Svg icon={brandsIcon.github} />
                              </Icon>

                              <span>Download</span>
                            </Button>
                          </Navbar.Item>
                        </Navbar.End>
                      </Navbar.Menu>
                    </Container>
                  </Navbar>
                </Hero.Head>

                <Hero.Body>
                  <Container hasTextCentered>
                    <Title>Title</Title>
                    <Subtitle>Subtitle</Subtitle>
                  </Container>
                </Hero.Body>

                <Hero.Foot>
                  <Tabs.Nav isBoxed isFullwidth>
                    <Tabs.Item isActive>Overview</Tabs.Item>
                    <Tabs.Item>Modifiers</Tabs.Item>
                    <Tabs.Item>Grid</Tabs.Item>
                    <Tabs.Item>Elements</Tabs.Item>
                    <Tabs.Item>Components</Tabs.Item>
                    <Tabs.Item>Layout</Tabs.Item>
                  </Tabs.Nav>
                </Hero.Foot>
              </Hero>
            `}
          </Code>
        </Container>
      </Section>
    </Fragment>
  ))
  .add('Section', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Section
          </Title>

          <Subtitle>
            A simple container to divide your page into <b>sections</b>, like the one you're currently reading
          </Subtitle>

          <hr />

          <p>
            Use sections as <b>direct</b> children of your <em>root component</em>.
          </p>

          <Section>
            <Container>
              <Title>Section</Title>
              <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
            </Container>
          </Section>

          <Code language='jsx'>
            {indent`
              <Section>
                <Container>
                  <Title>Section</Title>
                  <Subtitle>A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
                </Container>
              </Section>
            `}
          </Code>

        </Content>
      </Container>
    </Section>
  ))
  .add('Footer', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Footer
          </Title>

          <Subtitle>
            A simple responsive <b>footer</b> which can include anything: lists, headings, columns, icons, buttons, etc.
          </Subtitle>

          <hr />

          <Footer>
            <Content hasTextCentered>
              <p>
                <strong>Trunx</strong> by <a href='http://g14n.info'>Gianluca Casati</a>. The source code is licensed <a href='http://g14n.info/mit-license'>MIT</a>.
              </p>
            </Content>
          </Footer>

          <Code language='jsx'>
            {indent`
              <Footer>
                <Content hasTextCentered>
                  <p>
                    <strong>Trunx</strong> by <a href='http://g14n.info'>Gianluca Casati</a>. The source code is licensed <a href='http://g14n.info/mit-license'>MIT</a>.
                  </p>
                </Content>
              </Footer>
            `}
          </Code>

        </Content>
      </Container>
    </Section>
  ))
  .add('Tiles', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Tiles powered by Flexbox
          </Title>

          <Subtitle>
            A <b>single tile</b> element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids
          </Subtitle>

          <hr />

          <p>
            To build intricate 2-dimensional layouts, you can use components
          </p>

          <ul>
            <li>
              <code>Tile</code>
            </li>

            <li>
              <code>Tile.Ancestor</code>
            </li>

            <li>
              <code>Tile.Child</code>
            </li>

            <li>
              <code>Tile.Child.Notification</code>
            </li>

            <li>
              <code>Tile.Child.Box</code>
            </li>
          </ul>

          <Tile.Ancestor>
            <Tile isVertical is8>
              <Tile>
                <Tile isParent isVertical>
                  <Tile.Child.Notification isPrimary>
                    <Title>Vertical...</Title>
                    <Subtitle>Top tile</Subtitle>
                  </Tile.Child.Notification>

                  <Tile.Child.Notification isWarning>
                    <Title>...tiles</Title>
                    <Subtitle>Bottom tile</Subtitle>
                  </Tile.Child.Notification>
                </Tile>

                <Tile isParent>
                  <Tile.Child.Notification isInfo>
                    <Title>Middle tile</Title>
                    <Subtitle>With an image</Subtitle>
                    <Image is4by3 src='http://via.placeholder.com/640x480.png' />
                  </Tile.Child.Notification>
                </Tile>
              </Tile>

              <Tile isParent>
                <Tile.Child.Notification isDanger>
                  <Title>Wide tile</Title>
                  <Subtitle>Aligned with the right tile</Subtitle>
                  <Content>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </Content>
                </Tile.Child.Notification>
              </Tile>
            </Tile>

            <Tile isParent>
              <Tile.Child.Notification isSuccess>
                <Title>Tall tile</Title>
                <Subtitle>With even more content</Subtitle>
                <Content>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>

                  <p>
                    Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.
                  </p>

                  <p>
                    Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
                  </p>
                </Content>
              </Tile.Child.Notification>
            </Tile>
          </Tile.Ancestor>
        </Content>
      </Container>
    </Section>
  ))
