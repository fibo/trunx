import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface MediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface MediaContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface MediaLeftProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

export interface MediaRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

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
