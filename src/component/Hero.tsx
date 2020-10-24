import * as React from 'react'

import { bulmaClassName } from './classNames'
import { MainColorsProps } from './modifiers'
import { renderElement } from './renderElement'

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement>, MainColorsProps {
  isBold?: boolean;
  isDark?: boolean;
  isFullheightWithNavbar?: boolean;
  isFullheight?: boolean;
  isLarge?: boolean;
  isLight?: boolean;
  isMedium?: boolean;
}

type HeroBodyProps = React.HTMLAttributes<HTMLDivElement>

type HeroFootProps = React.HTMLAttributes<HTMLDivElement>

type HeroHeadProps = React.HTMLAttributes<HTMLDivElement>

class HeroBody extends React.Component<HeroBodyProps> {
  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.heroBody)
  }
}

class HeroFoot extends React.Component<HeroFootProps> {
  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.heroFoot)
  }
}

class HeroHead extends React.Component<HeroHeadProps> {
  render ():React.ReactNode {
    return renderElement('div', this.props, bulmaClassName.heroHead)
  }
}

export class Hero extends React.Component<HeroProps> {
  static Body = HeroBody
  static Foot = HeroFoot
  static Head = HeroHead

  render ():React.ReactNode {
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
      isMedium
    })
  }
}
