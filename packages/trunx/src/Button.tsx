import * as React from 'react'

import { ErrorBoundaryProps } from './ErrorBoundary'
import { bulmaClassName, classNames } from './classNames.js'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from './modifiers'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {
  isActive?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isGhost?: boolean
  isInverted?: boolean
  isLoading?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isText?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
}

export class Button extends React.Component<ButtonProps> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = { hasError: false }

  render(): React.ReactNode {
    const [
      modifiersProps,
      {
        children,
        className: classNameProp,
        disabled,
        fallbackUI,
        href,
        isActive,
        isFocused,
        isFullwidth,
        isGhost,
        isInverted,
        isLoading,
        isNormal,
        isOutlined,
        isRounded,
        isStatic,
        isText,
        target,
        type,
        value,
        ...props
      },
    ] = extractModifiersProps(this.props)

    if (this.state.hasError) return fallbackUI

    const className = classNames(
      bulmaClassName.button,
      classNameProp,
      {
        'is-active': isActive,
        'is-focused': isFocused,
        'is-fullwidth': isFullwidth,
        'is-ghost': isGhost,
        'is-inverted': isInverted,
        'is-loading': isLoading,
        'is-normal': isNormal,
        'is-outlined': isOutlined,
        'is-rounded': isRounded,
        'is-static': isStatic,
        'is-text': isText,
      },
      modifierPropsToClassnamesObject(modifiersProps)
    )

    if (href) {
      return (
        <a className={className} href={href} {...props}>
          {children}
        </a>
      )
    }

    if (type) {
      if (disabled || isLoading) {
        return (
          <button className={className} disabled={disabled} {...props}>
            {value}
          </button>
        )
      } else {
        return <input className={className} type={type} value={value} {...props} />
      }
    }

    return (
      <button className={className} disabled={disabled} {...props}>
        {children}
      </button>
    )
  }
}
