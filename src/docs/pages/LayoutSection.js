import React from 'react'

import Code from '../components/Code.js'
import Nav from '../components/Nav.js'

import indent from '../utils/indent.js'

import {
  Container,
  Content,
  Section,
  Title,
  Subtitle
} from '../../../index.js'

export default function LayoutSection () {
  return (
    <>
      <Nav pathname={pathname} />

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
    </>
  )
}
