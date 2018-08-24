import * as classnames from "classnames"
import * as React from "react"

interface IMessageProps {
  isDanger?: boolean
  isDark?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isLink?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
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
      isDanger,
      isDark,
      isInfo,
      isLarge,
      isLink,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
    } = this.props

    const className = classnames("message", {
      "is-danger": isDanger,
      "is-dark": isDark,
      "is-info": isInfo,
      "is-large": isLarge,
      "is-link": isLink,
      "is-medium": isMedium,
      "is-primary": isPrimary,
      "is-small": isSmall,
      "is-success": isSuccess,
      "is-warning": isWarning,
    })

    return (
      <article className={className}>{this.props.children}</article>
    )
  }
}
