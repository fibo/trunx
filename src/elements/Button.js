import React, { Component } from 'react'

import classname from 'classname'

export default class Button extends Component {
  render () {
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
      onClick
    } = this.props

    const className = classname(['button'], {
      'is-active': isActive,
      'is-black': isBlack,
      'is-danger': isDanger,
      'is-dark': isDark,
      'is-disabled': isDisabled,
      'is-focused': isFocused,
      'is-large': isLarge,
      'is-light': isLight,
      'is-link': isLink,
      'is-info': isInfo,
      'is-inverted': isInverted,
      'is-loading': isLoading,
      'is-outlined': isOutlined,
      'is-primary': isPrimary,
      'is-rounded': isRounded,
      'is-static': isStatic,
      'is-success': isSuccess,
      'is-text': isText,
      'is-warning': isWarning,
      'is-white': isWhite
    })

    return href ? (
      <a
        className={className}
        href={href}
      >{this.props.children}</a>
    ) : (
      <button
        className={className}
        onClick={onClick}
      >{this.props.children}</button>
    )
  }
}
