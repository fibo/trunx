import * as classname from 'classname'
import * as React from 'react'

interface HeroProps {
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

export default class Hero extends React.Component<HeroProps> {
  static Body = HeroBody

  render() {
    const {
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
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-fullheight': isFullheight,
      'is-info': isInfo,
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
