import * as React from 'react'

import { bulmaClassName } from './classNames'
import { renderElement } from './renderElement'

export type MediaProps = React.HTMLAttributes<HTMLDivElement>

export type MediaContentProps = React.HTMLAttributes<HTMLDivElement>

export type MediaLeftProps = React.HTMLAttributes<HTMLDivElement>

export type MediaRightProps = React.HTMLAttributes<HTMLDivElement>

class MediaContent extends React.Component<MediaContentProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.mediaContent)
  }
}

class MediaLeft extends React.Component<MediaLeftProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.mediaLeft)
  }
}

class MediaRight extends React.Component<MediaRightProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.mediaRight)
  }
}

export class Media extends React.Component<MediaProps> {
  static Content = MediaContent
  static Left = MediaLeft
  static Right = MediaRight

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.media)
  }
}
