import * as classnames from "classnames"
import * as React from "react"

interface IMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

interface IMediaContentProps {
  children?: React.ReactNode
  className?: string
}

interface IMediaLeftProps {
  children?: React.ReactNode
  className?: string
}

interface IMediaRightProps {
  children?: React.ReactNode
  className?: string
}

class MediaContent extends React.Component<IMediaContentProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "media-content",
          className,
        )}
      >{children}</div>
    )
  }
}

class MediaLeft extends React.Component<IMediaLeftProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "media-left",
          className,
        )}
      >{children}</div>
    )
  }
}

class MediaRight extends React.Component<IMediaRightProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "media-right",
          className,
        )}
      >{children}</div>
    )
  }
}

export default class Media extends React.Component<IMediaProps> {
  static Content = MediaContent
  static Left = MediaLeft
  static Right = MediaRight

  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "media",
          className,
        )}
        {...props}
      >{children}</div>
    )
  }
}
