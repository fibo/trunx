import * as classnames from 'classnames'
import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, MainColorsProps, ShadeColorsProps, SizeProps } from './modifiers'
import { renderElement } from './renderElement'

interface MessageProps extends React.HTMLAttributes<HTMLElement>, HelpersProps, MainColorsProps, ShadeColorsProps, SizeProps {
  isDark?: boolean;
}

export type MessageBodyProps = React.HTMLAttributes<HTMLDivElement>

export type MessageHeaderProps = React.HTMLAttributes<HTMLDivElement>

class MessageBody extends React.Component<MessageBodyProps> {
  render () : React.ReactNode{
    return renderElement('div', this.props, bulmaClassName.messageBody)
  }
}

class MessageHeader extends React.Component<MessageHeaderProps> {
  render (): React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.messageHeader)
  }
}

export class Message extends React.Component<MessageProps> {
  static Body = MessageBody
  static Header = MessageHeader

  render (): React.ReactNode {
    return renderElement('article', this.props, bulmaClassName.message)
  }
}
