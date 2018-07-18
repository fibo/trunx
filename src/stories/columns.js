import React from 'react'

import { storiesOf } from '@storybook/react'

import Column from '../component/Column'
import Columns from '../component/Columns'
import Container from '../component/Container'
import Content from '../component/Content'
import Notification from '../component/Notification'
import Section from '../component/Section'
import Subtitle from '../component/Subtitle'
import Title from '../component/Title'

import Code from './Code'
import indent from './indent'

storiesOf('Columns', module)
  .add('Basics', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Columns powered by Flexbox
          </Title>

          <Subtitle>
            A simple way to build responsive columns
          </Subtitle>

          <p>
            Building a <b>columns layout</b> with Trunx is very simple:
          </p>

          <ol>
            <li>Add a <code>Columns</code> component as container.</li>

            <li>Add as many <code>Column</code> components as children.</li>
          </ol>

          <p>
            Each column will have an <b>equal width</b>, no matter the number of columns.
          </p>

          <hr />

          <Columns>
            <Column>
              <Notification isPrimary>First Column</Notification>
            </Column>
            <Column>
              <Notification isPrimary>Second Column</Notification>
            </Column>
            <Column>
              <Notification isPrimary>Third Column</Notification>
            </Column>
            <Column>
              <Notification isPrimary>Fourth Column</Notification>
            </Column>
          </Columns>

          <Code language='jsx'>
            {indent`
              <Columns>
                <Column>
                  <Notification>First Column</Notification>
                </Column>
                <Column>
                  <Notification>Second Column</Notification>
                </Column>
                <Column>
                  <Notification>Third Column</Notification>
                </Column>
                <Column>
                  <Notification>Fourth Column</Notification>
                </Column>
              </Columns>
            `}
          </Code>
        </Content>
      </Container>
    </Section>
  ))
  .add('Sizes', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Column sizes
          </Title>

          <Subtitle>
            Define the <b>size</b> of each column <b>individually</b>
          </Subtitle>

          <hr />

          <p>
            If you want to change the <b>size</b> of a single column, you can use one of the following props:
          </p>

          <ul>
            <li><code>isThreeQuarters</code></li>
            <li><code>isTwoThirds</code></li>
            <li><code>isHalf</code></li>
            <li><code>isOneThird</code></li>
            <li><code>isOneQuarter</code></li>
          </ul>

          <p>
            You can also use the following multiples of 20% as well:
          </p>

          <ul>
            <li><code>isFourFifths</code></li>
            <li><code>isThreeFifths</code></li>
            <li><code>isTwoFifths</code></li>
            <li><code>isOneFifth</code></li>
          </ul>

          <Columns>
            <Column isFourFifths>
              <Notification isPrimary><code>isFourFifths</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isThreeQuarters>
              <Notification isPrimary><code>isThreeQuarters</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isTwoThirds>
              <Notification isPrimary><code>isTwoThirds</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isThreeFifths>
              <Notification isPrimary><code>isThreeFifths</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isHalf>
              <Notification isPrimary><code>isHalf</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isTwoFifths>
              <Notification isPrimary><code>isTwoFifths</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isOneThird>
              <Notification isPrimary><code>isOneThird</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isOneQuarter>
              <Notification isPrimary><code>isOneQuarter</code></Notification>
            </Column>
            <Column>Auto</Column>
            <Column>Auto</Column>
          </Columns>

          <Columns>
            <Column isOneFifth>
              <Notification isPrimary><code>isOneFifth</code></Notification>
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
  ))
  .add('Responsiveness', () => (
    <Section>
      <Container>
        <Content>
          <Title is2>
            Columns responsiveness
          </Title>

          <Subtitle>
            Handle <b>different</b> column layouts for each <b>breakpoint</b>
          </Subtitle>

          <hr />

          <Title is4>
            Mobile columns
          </Title>

          <p>
            By default, columns are only activated from <b>tablet</b> onwards. This means columns are stacked on top of each other on <b>mobile</b>.
            If you want columns to work on <b>mobile too</b>, just add the <code>isMobile</code> prop to the <code>Columns</code> component:
          </p>

          <Columns isMobile>
            <Column>
              <Notification isPrimary>1</Notification>
            </Column>
            <Column>
              <Notification isPrimary>2</Notification>
            </Column>
            <Column>
              <Notification isPrimary>3</Notification>
            </Column>
            <Column>
              <Notification isPrimary>4</Notification>
            </Column>
          </Columns>

          <Code language='jsx'>
            {indent`
              <Columns isMobile>
                <Column>
                  <Notification>1</Notification>
                </Column>
                <Column>
                  <Notification>2</Notification>
                </Column>
                <Column>
                  <Notification>3</Notification>
                </Column>
                <Column>
                  <Notification>4</Notification>
                </Column>
              </Columns>
            `}
          </Code>

          <p>
            If you <em>only</em> want columns on <b>desktop</b> upwards, just use the <code>isDesktop</code> prop to the <code>Columns</code> component:
          </p>

          <Columns isDesktop>
            <Column>
              <Notification isPrimary>1</Notification>
            </Column>
            <Column>
              <Notification isPrimary>2</Notification>
            </Column>
            <Column>
              <Notification isPrimary>3</Notification>
            </Column>
            <Column>
              <Notification isPrimary>4</Notification>
            </Column>
          </Columns>

          <Code language='jsx'>
            {indent`
              <Columns isDesktop>
                <Column>
                  <Notification>1</Notification>
                </Column>
                <Column>
                  <Notification>2</Notification>
                </Column>
                <Column>
                  <Notification>3</Notification>
                </Column>
                <Column>
                  <Notification>4</Notification>
                </Column>
              </Columns>
            `}
          </Code>
        </Content>
      </Container>
    </Section>
  ))
