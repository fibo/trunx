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
  Div,
  Heading,
  ModalCard,
  NavbarEnd,
  NavbarMenu,
  NavbarStart,
  P,
  Progress,
  Span,
  classnames,
} from "../dist/index.js"

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
    <Heading tag="h1"></Heading>

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

    <P bulma="has-text-grey">Lorem ipsum...</P>

    <Progress color="primary" size="small" value="42" max="100">
      42%
    </Progress>
  </>
)
