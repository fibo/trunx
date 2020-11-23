import React from 'react'

import {
  Column,
  Columns,
  Container,
  Content,
  Notification,
  Section,
  Subtitle,
  Title,
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
            <Title is2>Column sizes</Title>

            <Subtitle>
              Define the <b>size</b> of each column <b>individually</b>
            </Subtitle>

            <hr />

            <p>
              If you want to change the <b>size</b> of a single column, you can
              use one of the following props:
            </p>

            <ul>
              <li>
                <code>isThreeQuarters</code>
              </li>
              <li>
                <code>isTwoThirds</code>
              </li>
              <li>
                <code>isHalf</code>
              </li>
              <li>
                <code>isOneThird</code>
              </li>
              <li>
                <code>isOneQuarter</code>
              </li>
            </ul>

            <p>You can also use the following multiples of 20% as well:</p>

            <ul>
              <li>
                <code>isFourFifths</code>
              </li>
              <li>
                <code>isThreeFifths</code>
              </li>
              <li>
                <code>isTwoFifths</code>
              </li>
              <li>
                <code>isOneFifth</code>
              </li>
            </ul>

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
