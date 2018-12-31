import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface ICardContentProps extends ITextColorHelpersProps {}

interface ICardFooterItemProps extends ITextColorHelpersProps {
  href?: string
}

interface ICardFooterProps extends ITextColorHelpersProps {}

interface ICardHeaderIconProps extends ITextColorHelpersProps {
  href?: string
}

interface ICardHeaderTitleProps extends ITextColorHelpersProps {
  isCentered?: boolean
}

class CardContent extends React.Component<ICardContentProps> {
  render() {
    const className = classnames("card-content",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className="card-content">{this.props.children}</div>
    )
  }
}

class CardFooterItem extends React.Component<ICardFooterItemProps> {
  render() {
    const {
      href,
    } = this.props

    const className = classnames("card-footer-item",
      textColorHelpersPropsToClassenames(this.props),
    )

    if (href) {
      return (
        <a
          className={className}
          href={href}
        >
          {this.props.children}
        </a>
      )
    } else {
      return (
        <div className={className}>{this.props.children}</div>
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
      href,
      ...props
    } = this.props

    const className = classnames("card-header-icon",
      textColorHelpersPropsToClassenames(this.props),
    )

    if (href) {
      return (
        <a
          className={className}
          href={href}
          {...props}
        >
          {this.props.children}
        </a>
      )
    } else {
      return (
        <div
          className={className}
          {...props}
        >
          {this.props.children}
        </div>
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
    const className = classnames("card-header",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <header className={className}>{this.props.children}</header>
    )
  }
}

class CardImage extends React.Component {
  render() {
    return (
      <div className="card-image">{this.props.children}</div>
    )
  }
}

export default class Card extends React.Component {
  static Content = CardContent
  static Footer = CardFooter
  static Header = CardHeader
  static Image = CardImage

  render() {
    const className = classnames("card",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
