import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export type MediaProps = React.HTMLAttributes<HTMLDivElement>

export type MediaContentProps = React.HTMLAttributes<HTMLDivElement>

export type MediaLeftProps = React.HTMLAttributes<HTMLDivElement>

export type MediaRightProps = React.HTMLAttributes<HTMLDivElement>

class MediaContent extends React.Component<MediaContentProps> {
  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.mediaContent)
  }
}

class MediaLeft extends React.Component<MediaLeftProps> {
  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.mediaLeft)
  }
}

class MediaRight extends React.Component<MediaRightProps> {
  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.mediaRight)
  }
}

export class Media extends React.Component<MediaProps> {
  static Content = MediaContent
  static Left = MediaLeft
  static Right = MediaRight

  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.media)
  }
}
