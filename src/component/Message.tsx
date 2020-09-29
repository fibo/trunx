import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  IMainColorsProps,
  ISizeProps,
  helpersPropsToClassnames,
  mainColorsPropsToClassnames,
  sizePropsToClassnames,
} from "./modifiers"

interface IMessageProps extends IHelpersProps,
                                IMainColorsProps,
                                ISizeProps {
  children?: React.ReactNode
  className?: string
  isDark?: boolean
}

interface IMessageBodyProps {
  children?: React.ReactNode
  className?: string
}

interface IMessageHeaderProps {
  children?: React.ReactNode
  className?: string
}

class MessageBody extends React.Component<IMessageBodyProps> {
  render() {
    const {
      className,
      children,
    } = this.props

    return (
      <div
        className={classnames(
          "message-body",
          className,
        )}
      >{children}</div>
    )
  }
}

class MessageHeader extends React.Component<IMessageHeaderProps> {
  render() {
    const {
      className,
      children,
    } = this.props

    return (
      <div
        className={classnames(
          "message-header",
          className,
        )}
      >{children}</div>
    )
  }
}

export default class Message extends React.Component<IMessageProps> {
  static Body = MessageBody
  static Header = MessageHeader

  render() {
    const {
      className,
      children,
      isDark,
      isInvisible,
      isMarginLess,
      isPaddingLess,
      isSrOnly,
    } = this.props

    return (
      <article
        className={classnames(
          "message",
          className,
          {
            "is-dark": isDark,
          },
          helpersPropsToClassnames({
            isInvisible,
            isMarginLess,
            isPaddingLess,
            isSrOnly,
          }),
          mainColorsPropsToClassnames(this.props),
          sizePropsToClassnames(this.props)
        )}
      >{children}</article>
    )
  }
}
