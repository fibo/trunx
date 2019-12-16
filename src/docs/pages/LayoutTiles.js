import React from 'react'

import Nav from '../components/Nav.js'

import {
  Container,
  Content,
  Image,
  Section,
  Subtitle,
  Tile,
  Title
} from '../../../index.js'

export default function LayoutTiles ({
  location: { pathname }
}) {
  return (
    <>
      <Nav pathname={pathname} />

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
    </>
  )
}
