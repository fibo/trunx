"use client"
import { Columns, Column, bulma } from "trunx"
import { Code, PageContent, PageSection } from "@/components"
import { indent } from "@/helpers/utils/indent"

export default function Page() {
  return (
    <PageContent
      title="Columns powered by Flexbox"
      subtitle={
        <>
          A simple way to build <b>responsive columns</b>
        </>
      }
    >
      <PageSection>
        <p>
          Building a <b>columns layout</b> with Trunx is very simple:
        </p>

        <ol>
          <li>
            Add a <code>Columns</code> container.
          </li>

          <li>
            Add as many <code>Column</code> as you want.
          </li>
        </ol>

        <p>
          Each column will have an <b>equal width</b>, no matter the number of columns.
        </p>

        <Columns>
          {["First", "Second", "Third", "Fourth"].map((label, i) => (
            <Column key={i}>
              <p
                className={bulma(
                  "has-text-centered",
                  "has-text-white",
                  "has-text-weight-bold",
                  "has-background-primary",
                  "is-rounded",
                  "p-2"
                )}
              >
                {label} column
              </p>
            </Column>
          ))}
        </Columns>

        <Code>
          {indent`
        <Columns>
          <Column>First column</Column>
          <Column>Second column</Column>
          <Column>Third column</Column>
          <Column>Fourth column</Column>
        </Columns>
        `}
        </Code>
      </PageSection>
    </PageContent>
  )
}
