import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IMessageProps extends IMainColorsProps, ISizeProps {
  isDark?: boolean
  isLink?: boolean
}

class MessageBody extends React.Component {
  render() {
    return (
      <div className="message-body">{this.props.children}</div>
    )
  }
}

class MessageHeader extends React.Component {
  render() {
    return (
      <div className="message-header">{this.props.children}</div>
    )
  }
}

export default class Message extends React.Component<IMessageProps> {
  static Body = MessageBody
  static Header = MessageHeader

  render() {
    const {
      isDark,
      isLink,
    } = this.props

    const className = classnames("message",
      {
        "is-dark": isDark,
        "is-link": isLink,
      },
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props)
    )

    return (
      <article className={className}>{this.props.children}</article>
    )
  }
}
