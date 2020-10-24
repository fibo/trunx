import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
} from "./classNames"
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
  TextColorHelpersProps,
  extractModifiersProps,
  modifierPropsToClassnamesObject,
} from "./modifiers"

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAbort'>, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onAbort' >,
                              HelpersProps,
                              MainColorsProps,
                              ShadeColorsProps,
                              SizeProps,
                              TextColorHelpersProps
                              {
  isActive?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isInverted?: boolean
  isLoading?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isText?: boolean
                              }

export default class Button extends React.Component<ButtonProps> {
  render() {
    const [
      modifiersProps,
    {
      children,
      className: classNameProp,
      disabled,
      href,
      isActive,
      isFocused,
      isFullwidth,
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
    }] = extractModifiersProps(this.props)

    const className = classnames(
      bulmaClassName.button,
      classNameProp,
      {
        "is-active": isActive,
        "is-focused": isFocused,
        "is-fullwidth": isFullwidth,
        "is-inverted": isInverted,
        "is-loading": isLoading,
        "is-normal": isNormal,
        "is-outlined": isOutlined,
        "is-rounded": isRounded,
        "is-static": isStatic,
        "is-text": isText,
      },
      modifierPropsToClassnamesObject(modifiersProps)
    )

    if (href) {
      return (
        <a
        className={className}
          href={href}
          {...props}
        >
          {children}
        </a>
      )
    }

    if (type) {
      if (disabled || isLoading) {
        return (
          <button
            className={className}
            disabled={disabled}
            {...props}
          >
            {value}
          </button>
        )
      } else {
        return (
          <input
            className={className}
            type={type}
            value={value}
            {...props}
          />
        )
      }
    }

    return (
      <button
        className={className}
        disabled={disabled}
        {...props}
      >
        {this.props.children}
      </button>
    )
  }
}
