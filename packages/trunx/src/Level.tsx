import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface LevelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  isMobile?: boolean
}

export interface LevelItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {
  as?: 'a' | 'div'
}

export interface LevelLeftProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface LevelRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

class LevelItem extends React.Component<LevelItemProps> {
  static defaultProps = { as: 'div' }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { as: tag, fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement(tag as string, props, bulmaClassName.levelItem)
  }
}

class LevelLeft extends React.Component<LevelLeftProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.levelLeft)
  }
}

class LevelRight extends React.Component<LevelRightProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.levelRight)
  }
}

export class Level extends React.Component<LevelProps> {
  static Item = LevelItem
  static Left = LevelLeft
  static Right = LevelRight

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, isMobile, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('nav', props, bulmaClassName.level, { isMobile })
  }
}
