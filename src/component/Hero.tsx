import * as React from "react"

import { bulmaClassName }from './classNames'
import { MainColorsProps } from "./modifiers"
import { renderElement } from './renderElement'

interface HeroProps extends React.HTMLAttributes<HTMLDivElement>, MainColorsProps {
  isBold?: boolean
  isDark?: boolean
  isFullheightWithNavbar?: boolean
  isFullheight?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
}

interface HeroBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

interface HeroFootProps extends React.HTMLAttributes<HTMLDivElement> {}

interface HeroHeadProps  extends React.HTMLAttributes<HTMLDivElement> {}

class HeroBody extends React.Component<HeroBodyProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.heroBody)
  }
}

class HeroFoot extends React.Component<HeroFootProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.heroFoot)
  }
}

class HeroHead extends React.Component<HeroHeadProps> {
  render() {
    return renderElement('div', this.props, bulmaClassName.heroHead)
  }
}

export default class Hero extends React.Component<HeroProps> {
  static Body = HeroBody
  static Foot = HeroFoot
  static Head = HeroHead

  render () {
    const {
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
...props
    } = this.props

renderElement('section', props, bulmaClassName.hero, {
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
})
  }
}
