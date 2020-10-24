import * as classnames from "classnames"
import * as React from "react"

import { renderElement } from './renderElement'
import { HelpersProps, MainColorsProps, ShadeColorsProps, SizeProps } from "./modifiers"
import {bulmaClassName}from './classNames'

interface MessageProps extends React.HTMLAttributes<HTMLElement>, HelpersProps, MainColorsProps, ShadeColorsProps, SizeProps {
  children?: React.ReactNode
  className?: string
  isDark?: boolean
}

interface MessageBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

interface MessageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

class MessageBody extends React.Component<MessageBodyProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.messageBody)
  }
}

class MessageHeader extends React.Component<MessageHeaderProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.messageHeader)
  }
}

export default class Message extends React.Component<MessageProps> {
  static Body = MessageBody
  static Header = MessageHeader

  render() {
return renderElement('article', this.props, bulmaClassName.message)
  }
}
