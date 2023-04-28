"use client"
import { Columns, Column } from "trunx"
import { Code, PageContent, PageSection } from "@/components"
import { ColumnFill } from "../ColumnFill"

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
          Each column will have an <b>equal width</b>, no matter the number of
          columns.
        </p>

        <Columns>
          {["First", "Second", "Third", "Fourth"].map((label, i) => (
            <Column key={i}>
              <ColumnFill text={`${label} column`} />
            </Column>
          ))}
        </Columns>

        <Code
          snippet={`
            <Columns>
              <Column>First column</Column>
              <Column>Second column</Column>
              <Column>Third column</Column>
              <Column>Fourth column</Column>
            </Columns>
          `}
        />
      </PageSection>
    </PageContent>
  )
}
