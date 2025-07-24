///////////////////////////////////////////////////////////////////
//
// This file contains all snippets used in README.md documentation.
//
///////////////////////////////////////////////////////////////////
import type { Bulma } from "../dist/index.js"
import { Button, Div, Message, Span } from "../dist/index.js"
import { classnames } from "../dist/classnames.js"

export function MyComponent({ isSuccess }: { isSuccess: boolean }) {
  return (
    <Div bulma="box">
      <Span bulma={{ "has-text-primary": isSuccess }}>Lorem ipsum...</Span>
    </Div>
  )
}

classnames("foo", "bar") // 'foo bar'
classnames("foo", ["bar"]) // 'foo bar'
classnames({ foo: true }, { bar: false }) // 'foo'

type T = "foo" | "bar" // my CSS classes
// @ts-expect-error
classnames<T>("foo", "quz") // ERROR: not assignable to type ClassnamesArg<T>[]

export function SuccessText({ text }: { text: string }) {
  return <span className={"has-text-success" satisfies Bulma}>{text}</span>
}

export function OtherReadmeSnippets() {
  return (
    <>
      <Button color="primary" size="large" isRounded>
        Download
      </Button>

      <Message color="primary">Hello trunx</Message>
    </>
  )
}
