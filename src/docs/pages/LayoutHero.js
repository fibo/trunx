import brandsIcon from 'fa-svg-icon/brands'
import React from 'react'

import {
  Button,
  Container,
  Content,
  Hero,
  Icon,
  Li,
  Navbar,
  Section,
  Tabs,
  Title,
  Subtitle
} from '../../../index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function LayoutHero ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Hero
            </Title>

            <Subtitle>
              An imposing <b>hero</b> banner to showcase something
            </Subtitle>

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
            `}
          </Code>
        </Container>
      </Section>
    </>
  )
}
