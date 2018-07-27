import * as classname from 'classname'
import * as React from 'react'

class CardContent extends React.Component {
  render() {
    return (
      <div className="card-content">this.props.children</div>
    )
  }
}

class CardFooter extends React.Component {
  render() {
    return (
      <footer className="card-footer">this.props.children</footer>
    )
  }
}

class CardHeaderIcon extends React.Component {
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
          this.props.children
        </a>
      )
    } else {
      return (
        <div
          className="card-header-icon"
          {...props}
        >
          this.props.children
        </div>
      )
    }
  }
}

class CardHeaderTitle extends React.Component {
  render() {
    return (
      <p className="card-header-title">this.props.children</p>
    )
  }
}

class CardHeader extends React.Component {
  static Icon = CardHeaderIcon
  static Title = CardHeaderTitle

  render() {
    return (
      <header className="card-header">this.props.children</header>
    )
  }
}

class CardImage extends React.Component {
  render() {
    return (
      <div className="card-image">this.props.children</div>
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
      <div className="card">this.props.children</div>
    )
  }
}
