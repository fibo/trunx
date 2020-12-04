import * as React from 'react'

import { bulmaClassName } from './classNames'
import { AlignementHelpersProps, TextColorHelpersProps } from './modifiers'
import { renderElement } from './renderElement'

export interface LevelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {
  isMobile?: boolean
}

export interface LevelItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlignementHelpersProps,
    TextColorHelpersProps {
  as?: 'a' | 'div'
}

export interface LevelLeftProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {}

export interface LevelRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {}

class LevelItem extends React.Component<LevelItemProps> {
  static defaultProps = { as: 'div' }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    const { as: tag, ...props } = this.props

    return renderElement(tag as string, props, bulmaClassName.levelItem)
  }
}

class LevelLeft extends React.Component<LevelLeftProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.levelLeft)
  }
}

class LevelRight extends React.Component<LevelRightProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.levelRight)
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
    if (this.state.hasError) {
      return null
    }

    const { isMobile, ...props } = this.props

    return renderElement('nav', props, bulmaClassName.level, { isMobile })
  }
}
