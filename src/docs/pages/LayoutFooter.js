import React from 'react'

import {
  Container,
  Content,
  Footer,
  Section,
  Title,
  Subtitle
} from '../../../component/index'
import { Code } from '../components/Code'
import { Nav } from '../components/Nav'
import { indent } from '../utils/indent'

export function LayoutFooter ({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Footer</Title>

            <Subtitle>
              A simple responsive <b>footer</b> which can include anything:
              lists, headings, columns, icons, buttons, etc.
            </Subtitle>

            <hr />

            <Footer>
              <Content hasTextCentered>
                <p>
                  <strong>Trunx</strong> by{' '}
                  <a href='http://g14n.info'>Gianluca Casati</a>. The source
                  code is licensed{' '}
                  <a href='http://g14n.info/mit-license'>MIT</a>.
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
    </>
  )
}
