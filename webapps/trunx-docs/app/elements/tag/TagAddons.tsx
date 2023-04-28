"use client"
import { Column, Columns, Control, Field, Tag, TagDelete, Tags } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Tag addons">
      <Columns>
        <Column>
          <p>
            You can <b>attach tags together</b> with the <code>hasAddons</code>{" "}
            modifier.
          </p>

          <Tags hasAddons>
            <Tag>Package</Tag>
            <Tag color="primary">trunx</Tag>
          </Tags>
        </Column>

        <Column>
          <Code
            snippet={`
          <Tags hasAddons>
            <Tag>Package</Tag>
            <Tag color="primary">trunx</Tag>
          </Tags>
              `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <p>
            You can attach a <b>text</b> tag with a <code>TagDelete</code>{" "}
            together.
          </p>

          <Tags hasAddons>
            <Tag color="danger">Alex Smith</Tag>
            <TagDelete />
          </Tags>
        </Column>

        <Column>
          <Code
            snippet={`
          <Tags hasAddons>
            <Tag color="danger">Alex Smith</Tag>
            <TagDelete />
          </Tags>
              `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <p>
            You can attach a <b>text</b> tag with a <code>TagDelete</code>{" "}
            together. If you want to attach <code>Tags</code>containers{" "}
            <b>together</b>, simply use the <code>Field</code> element with the{" "}
            <code>isGrouped=&quot;multiline&quot;</code> modifier.
          </p>

          <Field isGrouped="multiline">
            <Control>
              <Tags hasAddons>
                <Tag color="dark">npm</Tag>
                <Tag color="info">1.0.0</Tag>
              </Tags>
            </Control>

            <Control>
              <Tags hasAddons>
                <Tag color="dark">build</Tag>
                <Tag color="success">passing</Tag>
              </Tags>
            </Control>

            <Control>
              <Tags hasAddons>
                <Tag color="dark">chat</Tag>
                <Tag color="primary">on gitter</Tag>
              </Tags>
            </Control>
          </Field>
        </Column>

        <Column>
          <Code
            snippet={`
          <Field isGrouped="multiline">
            <Control>
              <Tags hasAddons>
                <Tag color="dark">npm</Tag>
                <Tag color="info">1.0.0</Tag>
              </Tags>
            </Control>

            <Control>
              <Tags hasAddons>
                <Tag color="dark">build</Tag>
                <Tag color="success">passing</Tag>
              </Tags>
            </Control>

            <Control>
              <Tags hasAddons>
                <Tag color="dark">chat</Tag>
                <Tag color="primary">on gitter</Tag>
              </Tags>
            </Control>
          </Field>
              `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <p>
            This can be useful for a long list of <b>blog tags</b>.
          </p>

          <Field isGrouped="multiline">
            {[
              "Technology",
              "CSS",
              "Flexbox",
              "Web Design",
              "Open Source",
              "Community",
              "Documentation",
            ].map((tag, i) => (
              <Control key={i}>
                <Tags hasAddons>
                  <Tag color="link">{tag}</Tag>
                  <TagDelete />
                </Tags>
              </Control>
            ))}
          </Field>
        </Column>

        <Column>
          <Code
            snippet={`
          <Field isGrouped="multiline">
            {[
              "Technology",
              "CSS",
              "Flexbox",
              "Web Design",
              "Open Source",
              "Community",
              "Documentation",
            ].map((tag, i) => (
              <Control key={i}>
                <Tags hasAddons>
                  <Tag color="link">{tag}</Tag>
                  <TagDelete />
                </Tags>
              </Control>
            ))}
          </Field>
              `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}
