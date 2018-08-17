import * as classnames from 'classnames'
import * as React from 'react'

interface Props {
  disabled?: boolean
  href?: string
  isActive?: boolean
  isBlack?: boolean
  isDanger?: boolean
  isDark?: boolean
  isDisabled?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isInfo?: boolean
  isInverted?: boolean
  isLarge?: boolean
  isLight?: boolean
  isLink?: boolean
  isLoading?: boolean
  isMedium?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isPrimary?: boolean
  isRounded?: boolean
  isSmall?: boolean
  isStatic?: boolean
  isSuccess?: boolean
  isText?: boolean
  isWarning?: boolean
  isWhite?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: 'reset' | 'submit'
}

export default class Button extends React.Component<Props> {
  render() {
    const {
      disabled,
      href,
      isActive,
      isBlack,
      isDanger,
      isDark,
      isDisabled,
      isFocused,
      isFullwidth,
      isInfo,
      isInverted,
      isLarge,
      isLight,
      isLink,
      isLoading,
      isMedium,
      isNormal,
      isOutlined,
      isPrimary,
      isRounded,
      isSmall,
      isStatic,
      isSuccess,
      isText,
      isWarning,
      isWhite,
      onClick,
      type,
      ...props
    } = this.props

    const className = classnames('button', {
      'is-active': isActive,
      'is-black': isBlack,
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-disabled': isDisabled,
      'is-focused': isFocused,
      'is-fullwidth': isFullwidth,
      'is-info': isInfo,
      'is-inverted': isInverted,
      'is-large': isLarge,
      'is-light': isLight,
      'is-link': isLink,
      'is-loading': isLoading,
      'is-medium': isMedium,
      'is-normal': isNormal,
      'is-outlined': isOutlined,
      'is-primary': isPrimary,
      'is-rounded': isRounded,
      'is-small': isSmall,
      'is-static': isStatic,
      'is-success': isSuccess,
      'is-text': isText,
      'is-warning': isWarning,
      'is-white': isWhite,
    })

    if (href) {
      return (
        <a
          className={className}
          href={href}
          {...props}
        >
          {this.props.children}
        </a>
      )
    }

    if (type) {
      return (
        <input
          className={className}
          type={type}
          {...props}
        />
      )
    }

    return (
      <button
        className={className}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {this.props.children}
      </button>
    )
  }
}
