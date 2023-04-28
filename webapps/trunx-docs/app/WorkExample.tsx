"use client"
import { Button, Column, Columns, Message, bulma } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="How it works">
      <p>
        Trunx React components wrap Bulma CSS classes. For example, import{" "}
        <code>Button</code> component.
      </p>

      <Code
        snippet={`
          import { Button } from "trunx";
        `}
      />

      <Columns isMultiline>
        <Column size="full">
          <p>This button</p>

          <Button color="primary" size="large">
            Push me
          </Button>
        </Column>

        <Column>
          <p>is created by this JSX code</p>

          <Code
            snippet={`
              <Button
                color="primary"
                size="large"
              >Push me</Button>
            `}
          />
        </Column>

        <Column>
          <p>which is equivalent to</p>

          <Code
            snippet={`
              <button
                className="is-primary is-large"
              >Push me</button>
            `}
          />
        </Column>
      </Columns>

      <p>
        You can also use <code>bulma</code> helper if some feature or HTML tag
        is not implemented by Trunx.
      </p>

      <Code
        snippet={`
          import { bulma } from "trunx";
        `}
      />

      <Columns isVcentered>
        <Column>
          <Code
            snippet={`
              You are <strong className={bulma("has-text-success")}>successful</strong>!
            `}
          />
        </Column>

        <Column>
          <div className={bulma("mb-5")}>
            You are{" "}
            <strong className={bulma("has-text-success")}>successful</strong>!
          </div>
        </Column>
      </Columns>

      <Message color="info">
        Many Trunx components accept a <code>className</code> prop which will be
        appended to Bulma classes in order to customize the component style.
      </Message>
    </PageSection>
  )
}
