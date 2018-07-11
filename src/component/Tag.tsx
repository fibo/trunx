import * as classname from 'classname'
import * as React from 'react'

interface Props {
  href?: string
  isBlack?: boolean
  isDanger?: boolean
  isDark?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isLight?: boolean
  isLink?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isRounded?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  isWhite?: boolean
}

export default class Tag extends React.Component<Props> {
  render() {
    const {
      href,
      isBlack,
      isDanger,
      isDark,
      isInfo,
      isLarge,
      isLight,
      isLink,
      isMedium,
      isPrimary,
      isRounded,
      isSmall,
      isSuccess,
      isWarning,
      isWhite,
      ...props
    } = this.props

    const className = classname(['tag'], {
      'is-black': isBlack,
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-info': isInfo,
      'is-large': isLarge,
      'is-light': isLight,
      'is-link': isLink,
      'is-medium': isMedium,
      'is-primary': isPrimary,
      'is-rounded': isRounded,
      'is-small': isSmall,
      'is-success': isSuccess,
      'is-warning': isWarning,
      'is-white': isWhite,
    })

    return href ? (
      <a
        className={className}
        href={href}
        {...props}
      >
        {this.props.children}
      </a>
    ) : (
      <span className={className}>{this.props.children}</span>
    )
  }
}
