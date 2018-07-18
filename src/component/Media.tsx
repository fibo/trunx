import * as React from 'react'

class MediaContent extends React.Component {
  render() {

    return (
      <div className="media-content">{this.props.children}</div>
    )
  }
}

class MediaLeft extends React.Component {
  render() {
    return (
      <figure className="media-left">{this.props.children}</figure>
    )
  }
}

class MediaRight extends React.Component {
  render() {
    return (
      <div className="media-right">{this.props.children}</div>
    )
  }
}

export default class Media extends React.Component<MediaProps> {
  static Content = MediaContent
  static Left = MediaLeft
  static Right = MediaRight

  render() {
    const {
      isMobile,
    } = this.props

    return (
      <article className={className}>{this.props.children}</article>
    )
  }
}
