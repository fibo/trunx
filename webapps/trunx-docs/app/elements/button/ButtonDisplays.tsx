"use client"
import { Button, Buttons, Column, Columns } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Displays">
      <Columns>
        <Column></Column>

        <Column>
          <Code
            snippet={`
              `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Buttons>
            <Button size="small" isFullwidth>
              Small
            </Button>
            <Button isFullwidth>Normal</Button>
            <Button size="medium" isFullwidth>
              Medium
            </Button>
            <Button size="large" isFullwidth>
              Large
            </Button>
          </Buttons>
        </Column>

        <Column>
          <Code
            snippet={`
          <Buttons>
            <Button size="small" isFullwidth>
              Small
            </Button>
            <Button isFullwidth>Normal</Button>
            <Button size="medium" isFullwidth>
              Medium
            </Button>
            <Button size="large" isFullwidth>
              Large
            </Button>
          </Buttons>
          `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}
