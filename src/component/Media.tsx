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
      <div className="media-left">{this.props.children}</div>
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

export default class Media extends React.Component {
  static Content = MediaContent
  static Left = MediaLeft
  static Right = MediaRight

  render() {
    return (
      <div className="media">{this.props.children}</div>
    )
  }
}
