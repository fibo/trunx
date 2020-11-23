import React from 'react'

import {
  Container,
  Content,
  Section,
  Subtitle,
  Title,
} from '../../../component/index'
import { Nav } from '../components/Nav'

export function ElementsContent({ location: { pathname } }) {
  return (
    <>
      <Nav />

      <Section>
        <Container>
          <Content>
            <Title is2>Content</Title>

            <Subtitle>
              A single class to handle <b>WYSIWYG</b> generated content, where
              only <b>HTML tags</b> are available
            </Subtitle>

            <hr />

            <p>
              When you can't use the CSS classes you want, or when you just want
              to directly use HTML tags, use <code>Content</code> as container.
              It can handle almost any HTML tag:
            </p>

            <ul>
              <li>
                <code>{'<p>'}</code> paragraphs
              </li>

              <li>
                <code>{'<ul>'}</code> <code>{'<ol>'}</code>{' '}
                <code>{'<dl>'}</code> lists
              </li>

              <li>
                <code>{'<h1>'}</code> to <code>{'<h6>'}</code> headings
              </li>

              <li>
                <code>{'<blockquote>'}</code> quotes
              </li>

              <li>
                <code>{'<em>'}</code> and <code>{'<strong>'}</code>
              </li>

              <li>
                <code>{'<table>'}</code> <code>{'<tr>'}</code>{' '}
                <code>{'<th>'}</code> <code>{'<td>'}</code> tables
              </li>
            </ul>
          </Content>
        </Container>
      </Section>
    </>
  )
}
