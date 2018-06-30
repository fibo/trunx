import * as classname from 'classname'
import * as React from 'react'

interface Props {
  isBlack?: boolean
  isDanger?: boolean
  isDark?: boolean
  isMedium?: boolean
  isLarge?: boolean
  isLight?: boolean
  isLink?: boolean
  isInfo?: boolean
  isPrimary?: boolean
  isRounded?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  isWhite?: boolean
}

export default class Tag extends React.Component<Props> {
  public render() {
    const {
      isBlack,
      isDanger,
      isDark,
      isLarge,
      isLight,
      isLink,
      isInfo,
      isMedium,
      isPrimary,
      isRounded,
      isSmall,
      isSuccess,
      isWarning,
      isWhite,
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

    return (
      <span className={className}>{this.props.children}</span>
    )
  }
}
