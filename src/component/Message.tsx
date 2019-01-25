import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  IMainColorsProps,
  ISizeProps,
  helpersPropsToClassenames,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IMessageProps extends IHelpersProps,
                                IMainColorsProps,
                                ISizeProps {
  isDark?: boolean
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
      isInvisible,
      isMarginLess,
      isPaddingLess,
      isSrOnly,
    } = this.props

    const className = classnames("message",
      {
        "is-dark": isDark,
      },
      helpersPropsToClassenames({
        isInvisible,
        isMarginLess,
        isPaddingLess,
        isSrOnly,
      }),
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props)
    )

    return (
      <article className={className}>{this.props.children}</article>
    )
  }
}
