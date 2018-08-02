import * as classname from 'classname'
import * as React from 'react'

interface HeroProps {
  isBold?: boolean
  isDanger?: boolean
  isDark?: boolean
  isFullheight?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
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

export default class Hero extends React.Component<HeroProps> {
  static Body = HeroBody
  static Foot = HeroFoot
  static Head = HeroHead

  render() {
    const {
      isBold,
      isDanger,
      isDark,
      isFullheight,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSuccess,
      isWarning,
    } = this.props

    const className = classname(['hero'], {
      'is-bold': isBold,
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-fullheight': isFullheight,
      'is-info': isInfo,
      'is-large': isLarge,
      'is-medium': isMedium,
      'is-primary': isPrimary,
      'is-success': isSuccess,
      'is-warning': isWarning,
    })

    return (
      <section className={className}>{this.props.children}</section>
    )
  }
}
