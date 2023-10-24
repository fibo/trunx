"use client"
import { Button, Buttons, Column, Columns } from "trunx"
import { Code, PageSection } from "@/components"

export default function Example() {
  return (
    <PageSection title="Styles">
      <Columns>
        <Column>
          <Buttons>
            <Button isOutlined>Outlined</Button>
            <Button isOutlined color="primary">
              Outlined
            </Button>
            <Button isOutlined color="link">
              Outlined
            </Button>
            <Button isOutlined color="info">
              Outlined
            </Button>
            <Button isOutlined color="success">
              Outlined
            </Button>
            <Button isOutlined color="danger">
              Outlined
            </Button>
          </Buttons>
        </Column>

        <Column>
          <Code
            snippet={`
          <Buttons>
            <Button isOutlined>Outlined</Button>
            <Button isOutlined color="primary">Outlined</Button>
            <Button isOutlined color="link">Outlined</Button>
            <Button isOutlined color="info">Outlined</Button>
            <Button isOutlined color="success">Outlined</Button>
            <Button isOutlined color="danger">Outlined</Button>
          </Buttons>
            `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Buttons>
            <Button isInverted>Inverted</Button>
            <Button isInverted color="primary">
              Inverted
            </Button>
            <Button isInverted color="link">
              Inverted
            </Button>
            <Button isInverted color="info">
              Inverted
            </Button>
            <Button isInverted color="success">
              Inverted
            </Button>
            <Button isInverted color="danger">
              Inverted
            </Button>
          </Buttons>
        </Column>

        <Column>
          <Code
            snippet={`
          <Buttons>
            <Button isInverted>Inverted</Button>
            <Button isInverted color="primary">Inverted</Button>
            <Button isInverted color="link">Inverted</Button>
            <Button isInverted color="info">Inverted</Button>
            <Button isInverted color="success">Inverted</Button>
            <Button isInverted color="danger">Inverted</Button>
          </Buttons>
            `}
          />
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Buttons>
            <Button isRounded>Rounded</Button>
            <Button isRounded color="primary">
              Rounded
            </Button>
            <Button isRounded color="link">
              Rounded
            </Button>
            <Button isRounded color="info">
              Rounded
            </Button>
            <Button isRounded color="success">
              Rounded
            </Button>
            <Button isRounded color="danger">
              Rounded
            </Button>
          </Buttons>
        </Column>

        <Column>
          <Code
            snippet={`
          <Buttons>
            <Button isRounded>Rounded</Button>
            <Button isRounded color="primary">Rounded</Button>
            <Button isRounded color="link">Rounded</Button>
            <Button isRounded color="info">Rounded</Button>
            <Button isRounded color="success">Rounded</Button>
            <Button isRounded color="danger">Rounded</Button>
          </Buttons>
            `}
          />
        </Column>
      </Columns>
    </PageSection>
  )
}
