"use client"
import { Column, Columns, Field, Tag, ButtonDelete } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Combinations">
      <Columns>
        <Column size={4}>
          <p>
            You can append a <b>delete button</b>.
          </p>
        </Column>

        <Column size={2}>
          <Field>
            <Tag color="success">
              Bar <ButtonDelete size="small" />
            </Tag>
          </Field>

          <Field>
            <Tag color="warning" size="medium">
              Hello <ButtonDelete size="small" />
            </Tag>
          </Field>

          <Field>
            <Tag color="danger" size="large">
              World <ButtonDelete />
            </Tag>
          </Field>
        </Column>

        <Column size={6}>
          <Code
            snippet={`
          <Tag color="success">
            Bar <ButtonDelete size="small" />
          </Tag>

          <Tag color="warning" size="medium">
            Hello <ButtonDelete size="small" />
          </Tag>

          <Tag color="danger" size="large">
            World <ButtonDelete />
          </Tag>
              `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}
