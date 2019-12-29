import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  mainColorsPropsToClassnames,
} from "./modifiers"

interface IHeroProps extends IMainColorsProps {
  isBold?: boolean
  isDark?: boolean
  isFullheightWithNavbar?: boolean
  isFullheight?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
}

class HeroBody extends React.Component {
  render() {
    return (
      <div className="hero-body">{this.props.children}</div>
    )
  }
}

class HeroFoot extends React.Component {
  render() {
    return (
      <div className="hero-foot">{this.props.children}</div>
    )
  }
}

class HeroHead extends React.Component {
  render() {
    return (
      <div className="hero-head">{this.props.children}</div>
    )
  }
}

export default class Hero extends React.Component<IHeroProps> {
  static Body = HeroBody
  static Foot = HeroFoot
  static Head = HeroHead

  render() {
    const {
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
    } = this.props

    const className = classnames("hero",
      {
        "is-bold": isBold,
        "is-dark": isDark,
        "is-fullheight": isFullheight,
        "is-fullheight-with-navbar": isFullheightWithNavbar,
        "is-large": isLarge,
        "is-medium": isMedium,
      },
      mainColorsPropsToClassnames(this.props),
    )

    return (
      <section className={className}>{this.props.children}</section>
    )
  }
}
