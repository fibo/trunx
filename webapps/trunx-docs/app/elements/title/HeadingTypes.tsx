"use client"
import { Column, Columns, Title, Subtitle } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection>
      <Columns>
        <Column>
          <p>
            There are <b>2 types</b> of heading:
          </p>

          <ol>
            <li>
              <code>Title</code>
            </li>

            <li>
              <code>Subtitle</code>
            </li>
          </ol>
        </Column>

        <Column>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
        </Column>

        <Column>
          <Code
            snippet={`
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
              `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}
