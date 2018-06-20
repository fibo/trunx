import * as classname from 'classname'
import * as React from 'react'

interface Props {
  href?: string
  isActive?: boolean
  isBlack?: boolean
  isDanger?: boolean
  isDark?: boolean
  isDisabled?: boolean
  isFocused?: boolean
  isLarge?: boolean
  isLight?: boolean
  isLink?: boolean
  isInfo?: boolean
  isInverted?: boolean
  isLoading?: boolean
  isOutlined?: boolean
  isPrimary?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isSuccess?: boolean
  isText?: boolean
  isWarning?: boolean
  isWhite?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default class Button extends React.Component<Props> {
  public render() {
    const {
      href,
      isActive,
      isBlack,
      isDanger,
      isDark,
      isDisabled,
      isFocused,
      isLarge,
      isLight,
      isLink,
      isInfo,
      isInverted,
      isLoading,
      isOutlined,
      isPrimary,
      isRounded,
      isStatic,
      isSuccess,
      isText,
      isWarning,
      isWhite,
      onClick,
    } = this.props

    const className = classname(['button'], {
      'is-active': isActive,
      'is-black': isBlack,
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-disabled': isDisabled,
      'is-focused': isFocused,
      'is-info': isInfo,
      'is-inverted': isInverted,
      'is-large': isLarge,
      'is-light': isLight,
      'is-link': isLink,
      'is-loading': isLoading,
      'is-outlined': isOutlined,
      'is-primary': isPrimary,
      'is-rounded': isRounded,
      'is-static': isStatic,
      'is-success': isSuccess,
      'is-text': isText,
      'is-warning': isWarning,
      'is-white': isWhite,
    })

    return href ? (
      <a
        className={className}
        href={href}
      >
        {this.props.children}
      </a>
    ) : (
      <button
        className={className}
        onClick={onClick}
      >
        {this.props.children}
      </button>
    )
  }
}
