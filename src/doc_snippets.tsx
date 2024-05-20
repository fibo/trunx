//////////////////////////////////////////////////////////////////////
//
// This file contains all snippets used in trunx documentation.
// It is not included in the dist/ folder but it is checked by `npm test`.
//
//////////////////////////////////////////////////////////////////////

import { FC, PropsWithChildren, ButtonHTMLAttributes } from "react"
import {
  Bulma,
  Button,
  Buttons,
  ButtonDelete,
  Cell,
  Container,
  Control,
  Div,
  Field,
  FixedGrid,
  Grid,
  Heading,
  Input,
  Label,
  Modal,
  ModalCard,
  ModalClose,
  ModalContent,
  Notification,
  NavbarEnd,
  NavbarMenu,
  NavbarStart,
  P,
  Progress,
  Span,
  Select,
  Section,
  Textarea,
  classnames,
} from "./index.js"

// Snippets in README.md
//////////////////////////////////////////////////////////////////////

export const MyComponent: FC<{ isSuccess: boolean }> = ({ isSuccess }) => (
  <Div bulma="block">
    <Span bulma={["has-text-weight-semibold", { "has-text-primary": isSuccess }]}>Lorem ipsum...</Span>
  </Div>
)

type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Partial<{ isLoading: boolean }>

export const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({ isLoading, children, ...props }) => (
  <button className={classnames<Bulma>("button", { "is-loading": isLoading })} {...props}>
    {children}
  </button>
)

export const OtherReadmeSnippets: FC = () => (
  <>
    <Button color="primary" size="large" isRounded>
      Download
    </Button>
  </>
)

// Snippets in components TSDocs.
//////////////////////////////////////////////////////////////////////

export const Snippets: FC = () => (
  <>
    <Button color="primary" variant="light" isLoading>
      Login
    </Button>

    <Container isFluid>
      <Notification color="primary">
        This container is <strong>fluid</strong>
      </Notification>
    </Container>

    <Field>
      <Label>Name</Label>
      <Control>
        <Input placeholder="e.g Alex Smith" />
      </Control>
    </Field>

    <FixedGrid hasAutoCount>
      <Cell>cell 1</Cell>
      <Cell>cell 2</Cell>
    </FixedGrid>

    <FixedGrid bulma="has-4-cols">
      <Cell>cell 1</Cell>
      <Cell bulma="is-col-start-3">cell 2</Cell>
      <Cell>cell 3</Cell>
      <Cell>cell 4</Cell>
      <Cell>cell 5</Cell>
      <Cell>cell 6</Cell>
    </FixedGrid>

    <Grid bulma={["is-col-min-4", "is-gap-2"]}>
      <Cell>cell 1</Cell>
      <Cell>cell 2</Cell>
    </Grid>

    <Heading tag="h1"></Heading>

    <Modal noBackground>
      <ModalContent>Content</ModalContent>
      <ModalClose />
    </Modal>

    <ModalCard
      head="Modal title"
      foot={
        <Buttons>
          <Button>Ok</Button>
        </Buttons>
      }
    >
      Content ...
    </ModalCard>

    <NavbarMenu>
      <NavbarStart>// Navbar items</NavbarStart>
      <NavbarEnd>// Navbar items</NavbarEnd>
    </NavbarMenu>

    <Notification color="info" variant="light">
      <ButtonDelete />
      Lorem ipsum...
    </Notification>

    <P bulma="has-text-grey">Lorem ipsum...</P>

    <Progress color="primary" size="small" value="42" max="100">
      42%
    </Progress>

    <Section size="medium">
      <Heading tag="h2">Title</Heading>
    </Section>

    <Select
      size="large"
      options={[
        { value: "A", label: "Apple" },
        { value: "B", label: "Banana" },
      ]}
    />

    <Textarea size="small" color="info" />
  </>
)
