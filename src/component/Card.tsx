import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

import Image, { IImageProps } from "./Image"

interface ICardContentProps extends ITextColorHelpersProps {
  children: React.ReactNode
  className?: string
}

interface ICardFooterItemProps {
  children: React.ReactNode
  className?: string
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface ICardFooterProps extends ITextColorHelpersProps {
  children: React.ReactNode
  className?: string
}

interface ICardHeader {
  children: React.ReactNode
  className?: string
}

interface ICardHeaderIconProps {
  children: React.ReactNode
  className?: string
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface ICardHeaderTitleProps {
  children: React.ReactNode
  className?: string
  isCentered?: boolean
}

interface ICardImageProps extends IImageProps {
  className?: string
}

interface ICardProps extends IBackgroundColorHelpersProps,
                             React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

class CardContent extends React.Component<ICardContentProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "card-content",
          className,
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</div>
    )
  }
}

class CardFooterItem extends React.Component<ICardFooterItemProps> {
  render() {
    const {
      className: classNameProp,
      children,
      download,
      href,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames(
      "card-footer-item",
      classNameProp,
    )

    if (href || onClick) {
      return (
        <Anchor
          {...props}
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
        >
          {children}
        </Anchor>
      )
    } else {
      return (
        <div className={className}>{children}</div>
      )
    }
  }
}

class CardFooter extends React.Component<ICardFooterProps> {
  static Item = CardFooterItem

  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <footer
        className={classnames(
          "card-footer",
          className,
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</footer>
    )
  }
}

class CardHeaderIcon extends React.Component<ICardHeaderIconProps> {
  render() {
    const {
      children,
      className: classNameProp,
      download,
      href,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames(
      "card-header-icon",
      classNameProp
    )

    if (href || onClick) {
      return (
        <Anchor
          {...props}
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
        >
          {children}
        </Anchor>
      )
    } else {
      return (
        <div {...props} className={className}>{children}</div>
      )
    }
  }
}

class CardHeaderTitle extends React.Component<ICardHeaderTitleProps> {
  render() {
    const {
      children,
      className,
      isCentered,
    } = this.props

    return (
      <div
        className={classnames(
          "card-header-title",
          className,
          {
            "is-centered": isCentered,
          },
        )}
      >{children}</div>
    )
  }
}

class CardHeader extends React.Component<ICardHeader> {
  static Icon = CardHeaderIcon
  static Title = CardHeaderTitle

  render() {
    const {
      className,
      children,
    } = this.props

    return (
      <header
        className={classnames(
          "card-header",
          className
        )}
      >{children}</header>
    )
  }
}

class CardImage extends React.Component<ICardImageProps> {
  render() {
    const {
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "card-image",
          className,
        )}
      ><Image {...props} /></div>
    )
  }
}

export default class Card extends React.Component<ICardProps> {
  static Content = CardContent
  static Footer = CardFooter
  static Header = CardHeader
  static Image = CardImage

  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <div
        className={classnames(
          "card",
          className,
          backgroundColorHelpersPropsToClassnames(props),
        )}
      >{children}</div>
    )
  }
}
