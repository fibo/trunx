"use client"
import { Button, Buttons, Column, Columns } from "trunx"
import { Code, PageSection } from "@/components"
import { indent } from "@/helpers/utils/indent"

export default function Example() {
  return (
    <PageSection title="Colors">
      <Columns>
        <Column>
          <Buttons>
            <Button color="white">white</Button>
            <Button color="light">light</Button>
            <Button color="dark">dark</Button>
            <Button color="black">black</Button>
            <Button color="text">text</Button>
            <Button color="ghost">ghost</Button>
          </Buttons>
        </Column>

        <Column>
          <Code>
            {indent`
          <Buttons>
            <Button color="white">white</Button>
            <Button color="light">light</Button>
            <Button color="dark">dark</Button>
            <Button color="black">black</Button>
            <Button color="text">text</Button>
            <Button color="ghost">ghost</Button>
          </Buttons>
          `}
          </Code>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Buttons>
            <Button color="primary">primary</Button>
            <Button color="link">link</Button>
          </Buttons>

          <Buttons>
            <Button color="info">info</Button>
            <Button color="success">success</Button>
            <Button color="warning">warning</Button>
            <Button color="danger">danger</Button>
          </Buttons>
        </Column>

        <Column>
          <Code>
            {indent`
          <Buttons>
            <Button color="primary">primary</Button>
            <Button color="link">link</Button>
          </Buttons>

          <Buttons>
            <Button color="info">info</Button>
            <Button color="success">success</Button>
            <Button color="warning">warning</Button>
            <Button color="danger">danger</Button>
          </Buttons>
          `}
          </Code>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Buttons>
            <Button isLight color="primary">
              primary
            </Button>
            <Button isLight color="link">
              link
            </Button>
          </Buttons>

          <Buttons>
            <Button isLight color="info">
              info
            </Button>
            <Button isLight color="success">
              success
            </Button>
            <Button isLight color="warning">
              warning
            </Button>
            <Button isLight color="danger">
              danger
            </Button>
          </Buttons>
        </Column>

        <Column>
          <Code>
            {indent`
          <Buttons>
            <Button isLight color="primary">primary</Button>
            <Button isLight color="link">link</Button>
          </Buttons>

          <Buttons>
            <Button isLight color="info">info</Button>
            <Button isLight color="success">success</Button>
            <Button isLight color="warning">warning</Button>
            <Button isLight color="danger">danger</Button>
          </Buttons>
          `}
          </Code>
        </Column>
      </Columns>
    </PageSection>
  )
}
