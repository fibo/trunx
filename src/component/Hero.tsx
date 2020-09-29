import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  mainColorsPropsToClassnames,
} from "./modifiers"

interface IHeroProps extends IMainColorsProps {
  children?: React.ReactNode
  className?: string
  isBold?: boolean
  isDark?: boolean
  isFullheightWithNavbar?: boolean
  isFullheight?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
}

interface IHeroBodyProps {
  children?: React.ReactNode
  className?: string
}

interface IHeroFootProps {
  children?: React.ReactNode
  className?: string
}

interface IHeroHeadProps {
  children?: React.ReactNode
  className?: string
}

class HeroBody extends React.Component<IHeroBodyProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "hero-body",
          className,
        )}
      >{children}</div>
    )
  }
}

class HeroFoot extends React.Component<IHeroFootProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "hero-foot",
          className,
        )}
      >{children}</div>
    )
  }
}

class HeroHead extends React.Component<IHeroHeadProps> {
  render() {
    const {
      children,
      className,
    } = this.props

    return (
      <div
        className={classnames(
          "hero-head",
          className,
        )}
      >{children}</div>
    )
  }
}

export default class Hero extends React.Component<IHeroProps> {
  static Body = HeroBody
  static Foot = HeroFoot
  static Head = HeroHead

  render() {
    const {
      children,
      className,
      isBold,
      isDark,
      isFullheight,
      isFullheightWithNavbar,
      isLarge,
      isMedium,
    } = this.props

    return (
      <section
        className={classnames(
          "hero",
          className,
          {
            "is-bold": isBold,
            "is-dark": isDark,
            "is-fullheight": isFullheight,
            "is-fullheight-with-navbar": isFullheightWithNavbar,
            "is-large": isLarge,
            "is-medium": isMedium,
          },
          mainColorsPropsToClassnames(this.props),
        )}
      >{children}</section>
    )
  }
}
