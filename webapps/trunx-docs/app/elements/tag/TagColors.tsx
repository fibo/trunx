"use client"
import { Column, Columns, Field, Tag } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Colors">
      <Columns>
        <Column size={4}>
          <p>
            Like with buttons, there are <b>10 different colors</b> available.
          </p>
        </Column>

        <Column size={2}>
          <Field>
            <Tag color="black">Black</Tag>
          </Field>
          <Field>
            <Tag color="dark">Dark</Tag>
          </Field>
          <Field>
            <Tag color="light">Light</Tag>
          </Field>
          <Field>
            <Tag color="white">White</Tag>
          </Field>
          <Field>
            <Tag color="primary">Primary</Tag>
          </Field>
          <Field>
            <Tag color="link">Link</Tag>
          </Field>
          <Field>
            <Tag color="info">Info</Tag>
          </Field>
          <Field>
            <Tag color="success">Success</Tag>
          </Field>
          <Field>
            <Tag color="warning">Warning</Tag>
          </Field>
          <Field>
            <Tag color="danger">Danger</Tag>
          </Field>
        </Column>

        <Column size={6}>
          <Code
            snippet={`
          <Tag color="black">Black</Tag>
          <Tag color="dark">Dark</Tag>
          <Tag color="light">Light</Tag>
          <Tag color="white">White</Tag>
          <Tag color="primary">Primary</Tag>
          <Tag color="link">Link</Tag>
          <Tag color="info">Info</Tag>
          <Tag color="success">Success</Tag>
          <Tag color="warning">Warning</Tag>
          <Tag color="danger">Danger</Tag>
              `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column size={4}>
          <p>
            You can now choose the <b>light version</b> of a color.
          </p>
        </Column>

        <Column size={2}>
          <Field>
            <Tag color="primary" isLight>
              Primary
            </Tag>
          </Field>
          <Field>
            <Tag color="link" isLight>
              Link
            </Tag>
          </Field>
          <Field>
            <Tag color="info" isLight>
              Info
            </Tag>
          </Field>
          <Field>
            <Tag color="success" isLight>
              Success
            </Tag>
          </Field>
          <Field>
            <Tag color="warning" isLight>
              Warning
            </Tag>
          </Field>
          <Field>
            <Tag color="danger" isLight>
              Danger
            </Tag>
          </Field>
        </Column>

        <Column size={6}>
          <Code
            snippet={`
          <Tag color="primary" isLight>Primary</Tag>
          <Tag color="link" isLight>Link</Tag>
          <Tag color="info" isLight>Info</Tag>
          <Tag color="success" isLight>Success</Tag>
          <Tag color="warning" isLight>Warning</Tag>
          <Tag color="danger" isLight>Danger</Tag>
              `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}
