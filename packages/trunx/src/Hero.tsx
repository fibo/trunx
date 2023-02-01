import * as React from 'react'

import { bulmaClassName } from './classNames'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps, MainColorsProps } from './modifiers'
import { renderElement } from './renderElement'

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps {
  isBold?: boolean
  isDark?: boolean
  isFullheightWithNavbar?: boolean
  isFullheight?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
}

export interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

export interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}

class HeroBody extends React.Component<HeroBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.heroBody)
  }
}

class HeroFoot extends React.Component<HeroFootProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.heroFoot)
  }
}

class HeroHead extends React.Component<HeroHeadProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const { fallbackUI, ...props } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('div', props, bulmaClassName.heroHead)
  }
}

export class Hero extends React.Component<HeroProps> {
  static Body = HeroBody
  static Foot = HeroFoot
  static Head = HeroHead

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const {
      fallbackUI,
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
      ...props
    } = this.props

    if (this.state.hasError) return fallbackUI

    return renderElement('section', props, bulmaClassName.hero, {
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
    })
  }
}
