import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Column,
  Columns,
  Container,
  Content,
  Li,
  Notification,
  P,
  Section,
  Subtitle,
  Title,
  Ul
} from '../../../index.js'

export default function ColumnsNesting ({
  location: { pathname }
}) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>
              Nesting columns
            </Title>

            <Subtitle>
              A simple way to build <b>responsive columns</b>
            </Subtitle>

            <hr />

            <Title is4>
              Mobile columns
            </Title>

            <P>
              You can <b>nest</b> columns to have more flexibility in your design. You only need to follow this structure:
            </P>

            <Ul>
              <Li>
                <code>columns</code>: top level columns container

                <Ul>
                  <Li>
                    <code>column</code>

                    <Ul>
                      <Li>
                        <code>columns</code>: nested columns

                        <Ul>
                          <Li>
                            <code>column</code> and so on...
                          </Li>
                        </Ul>
                      </Li>
                    </Ul>
                  </Li>
                </Ul>
              </Li>
            </Ul>

            <Columns>
              <Column>
                <P hasBackgroundInfo hasTextWhite>
                  First column
                </P>

                <Columns isMobile>
                  <Column>
                    <P hasBackgroundInfo hasTextWhite>
                      First nested column
                    </P>
                  </Column>

                  <Column>
                    <P hasBackgroundInfo hasTextWhite>
                      Second nested column
                    </P>
                  </Column>
                </Columns>
              </Column>
            </Columns>

            <Code language='jsx'>
              {indent`
                <Columns>
                  <Column>
                    <P hasBackgroundInfo hasTextWhite>
                      First column
                    </P>

                    <Columns isMobile>
                      <Column>
                        <P hasBackgroundInfo hasTextWhite>
                          First nested column
                        </P>
                      </Column>

                      <Column>
                        <P hasBackgroundInfo hasTextWhite>
                          Second nested column
                        </P>
                      </Column>
                    </Columns>
                  </Column>
                </Columns>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
