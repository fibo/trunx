import * as React from 'react'

import { bulmaClassName } from './classNames'
import { HelpersProps, MainColorsProps } from './modifiers'
import { renderElement } from './renderElement'

export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
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

interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}

class HeroBody extends React.Component<HeroBodyProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.heroBody)
  }
}

class HeroFoot extends React.Component<HeroFootProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.heroFoot)
  }
}

class HeroHead extends React.Component<HeroHeadProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null
    }

    return renderElement('div', this.props, bulmaClassName.heroHead)
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
    if (this.state.hasError) {
      return null
    }

    const {
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
      ...props
    } = this.props

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
