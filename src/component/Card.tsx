import * as classname from 'classname'
import * as React from 'react'

interface CardFooterItemProps {
  href?: string
}

interface CardHeaderIconProps {
  href?: string
}

interface CardHeaderTitleProps {
  isCentered?: boolean
}

class CardContent extends React.Component {
  render() {
    return (
      <div className="card-content">{this.props.children}</div>
    )
  }
}

class CardFooterItem extends React.Component<CardFooterItemProps> {
  render() {
    const {
      href,
    } = this.props

    if (href) {
      return (
        <a
          className="card-footer-item"
          href={href}
        >
          {this.props.children}
        </a>
      )
    } else {
      return (
        <div
          className="card-footer-item"
        >
          {this.props.children}
        </div>
      )
    }
  }
}

class CardFooter extends React.Component {
  static Item = CardFooterItem

  render() {
    return (
      <footer className="card-footer">{this.props.children}</footer>
    )
  }
}

class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
  render() {
    const {
      href,
      ...props
    } = this.props

    if (href) {
      return (
        <a
          className="card-header-icon"
          href={href}
          {...props}
        >
          {this.props.children}
        </a>
      )
    } else {
      return (
        <div
          className="card-header-icon"
          {...props}
        >
          {this.props.children}
        </div>
      )
    }
  }
}

class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
  render() {
    const {
      isCentered,
    } = this.props

    const className = classname('card-header-title', {
      'is-centered': isCentered,
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
    return (
      <div className="card">{this.props.children}</div>
    )
  }
}
