import * as React from "react"

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {}

interface MediaContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface MediaLeftProps  extends React.HTMLAttributes<HTMLDivElement> {}

interface MediaRightProps  extends React.HTMLAttributes<HTMLDivElement> {}

class MediaContent extends React.Component<MediaContentProps> {
  render() {
return renderElement('div', this.props, bulmaClassName.mediaContent)
  }
}

class MediaLeft extends React.Component<MediaLeftProps> {
  render() {
return renderElement('div', this.props, bulmaClassName.mediaLeft)
  }
}

class MediaRight extends React.Component<MediaRightProps> {
  render() {
return renderElement('div', this.props, bulmaClassName.mediaRight)
  }
}

export default class Media extends React.Component<MediaProps> {
  static Content = MediaContent
  static Left = MediaLeft
  static Right = MediaRight

  render() {
return renderElement('div', this.props, bulmaClassName.media)
  }
}
