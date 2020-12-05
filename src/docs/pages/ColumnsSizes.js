import React from 'react'

import {
  B,
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
  Ul,
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function ColumnsSizes({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title>Column sizes</Title>

            <Subtitle>
              Define the <B>size</B> of each column <B>individually</B>
            </Subtitle>

            <hr />

            <P>
              If you want to change the <b>size</b> of a single column, you can
              use one of the following props:
            </P>

            <Ul>
              <Li>
                <code>isThreeQuarters</code>
              </Li>
              <Li>
                <code>isTwoThirds</code>
              </Li>
              <Li>
                <code>isHalf</code>
              </Li>
              <Li>
                <code>isOneThird</code>
              </Li>
              <Li>
                <code>isOneQuarter</code>
              </Li>
            </Ul>

            <P>You can also use the following multiples of 20% as well:</P>

            <Ul>
              <Li>
                <code>isFourFifths</code>
              </Li>
              <Li>
                <code>isThreeFifths</code>
              </Li>
              <Li>
                <code>isTwoFifths</code>
              </Li>
              <Li>
                <code>isOneFifth</code>
              </Li>
            </Ul>

            <Columns>
              <Column isFourFifths>
                <Notification isPrimary>
                  <code>isFourFifths</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isThreeQuarters>
                <Notification isPrimary>
                  <code>isThreeQuarters</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isTwoThirds>
                <Notification isPrimary>
                  <code>isTwoThirds</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isThreeFifths>
                <Notification isPrimary>
                  <code>isThreeFifths</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isHalf>
                <Notification isPrimary>
                  <code>isHalf</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isTwoFifths>
                <Notification isPrimary>
                  <code>isTwoFifths</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isOneThird>
                <Notification isPrimary>
                  <code>isOneThird</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isOneQuarter>
                <Notification isPrimary>
                  <code>isOneQuarter</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Columns>
              <Column isOneFifth>
                <Notification isPrimary>
                  <code>isOneFifth</code>
                </Notification>
              </Column>
              <Column>Auto</Column>
              <Column>Auto</Column>
            </Columns>

            <Code language='jsx'>
              {indent`
                <Columns>
                  <Column isFourFifths>
                    <Notification><code>isFourFifths</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isThreeQuarters>
                    <Notification><code>isThreeQuarters</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isTwoThirds>
                    <Notification><code>isTwoThirds</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isThreeFifths>
                    <Notification><code>isThreeFifths</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isHalf>
                    <Notification><code>isHalf</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isTwoFifths>
                    <Notification><code>isTwoFifths</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isOneThird>
                    <Notification><code>isOneThird</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isOneQuarter>
                    <Notification><code>isOneQuarter</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>

                <Columns>
                  <Column isOneFifth>
                    <Notification><code>isOneFifth</code></Notification>
                  </Column>
                  <Column>Auto</Column>
                  <Column>Auto</Column>
                </Columns>
              `}
            </Code>
          </Content>
        </Container>
      </Section>
    </>
  )
}
