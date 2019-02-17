import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

import Image, { IImageProps } from "./Image"

interface ICardContentProps extends ITextColorHelpersProps {}

interface ICardFooterItemProps {
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface ICardFooterProps extends ITextColorHelpersProps {}

interface ICardHeaderIconProps {
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

interface ICardHeaderTitleProps {
  isCentered?: boolean
}

class CardContent extends React.Component<ICardContentProps> {
  render() {
    const className = classnames("card-content",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class CardFooterItem extends React.Component<ICardFooterItemProps> {
  render() {
    const {
      download,
      href,
      onClick,
      target,
      ...props
    } = this.props

    const className = "card-footer-item"

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
          {this.props.children}
        </Anchor>
      )
    } else {
      return (
        <div {...props} className={className}>{this.props.children}</div>
      )
    }
  }
}

class CardFooter extends React.Component<ICardFooterProps> {
  static Item = CardFooterItem

  render() {
    const className = classnames("card-footer",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <footer className={className}>{this.props.children}</footer>
    )
  }
}

class CardHeaderIcon extends React.Component<ICardHeaderIconProps> {
  render() {
    const {
      download,
      href,
      onClick,
      target,
      ...props
    } = this.props

    const className = "card-header-icon"

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
          {this.props.children}
        </Anchor>
      )
    } else {
      return (
        <div {...props} className={className}>{this.props.children}</div>
      )
    }
  }
}

class CardHeaderTitle extends React.Component<ICardHeaderTitleProps> {
  render() {
    const {
      isCentered,
    } = this.props

    const className = classnames("card-header-title", {
      "is-centered": isCentered,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}

class CardHeader extends React.Component {
  static Icon = CardHeaderIcon
  static Title = CardHeaderTitle

  render() {
    return (
      <header className="card-header">{this.props.children}</header>
    )
  }
}

class CardImage extends React.Component<IImageProps> {
  render() {
    return (
      <div className="card-image"><Image {...this.props} /></div>
    )
  }
}

export default class Card extends React.Component {
  static Content = CardContent
  static Footer = CardFooter
  static Header = CardHeader
  static Image = CardImage

  render() {
    const className = "card"

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
