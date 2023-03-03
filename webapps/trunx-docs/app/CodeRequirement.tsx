"use client"
import { Column, Columns } from "trunx"
import { Code, PageSection } from "@/components"
import { indent } from "@/helpers/utils/indent"

export default function Example() {
  return (
    <PageSection title="HTML code requirements">
      <p>
        Trunx is son of awesome{" "}
        <a href="https://bulma.io/" target="_blank" rel="noreferrer">
          Bulma
        </a>{" "}
        which to work correctly needs a <b>responsive</b> webpage.
      </p>

      <Columns>
        <Column size="half">
          <p>Use the HTML5 doctype</p>

          <Code>
            {indent`
          <!DOCTYPE html>
        `}
          </Code>
        </Column>

        <Column size="half">
          <p>Add the responsive viewport meta tag</p>

          <Code>
            {indent`
          <meta name="viewport" content="width=device-width, initial-scale=1">
        `}
          </Code>
        </Column>
      </Columns>
    </PageSection>
  )
}