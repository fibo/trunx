import * as classnames from "classnames"
import * as React from "react"

import {
  bulmaClassName,
  BulmaClassModifiers,
} from "./classNames"
import { renderA } from "./commonRenders"
import {
  IHelpersProps,
  IMainColorsProps,
  IShadeColorsProps,
  ISizeProps,
  ITextColorHelpersProps,
  extractModifiersProps,
  helpersPropsToClassnames,
  mainColorsPropsToClassnames,
  shadeColorsPropsToClassnames,
  sizePropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ButtonModifiers extends Pick<
  BulmaClassModifiers, 'isActive'
                     | 'isFocused'
>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
                              React.InputHTMLAttributes<HTMLInputElement>,
                              IHelpersProps,
                              IMainColorsProps,
                              IShadeColorsProps,
                              ISizeProps,
                              ITextColorHelpersProps,
                              ButtonModifiers
{}
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

export default class Button extends React.Component<ButtonProps> {
  render() {
    const [{
      helpersProps,
      mainColorsProps,
      shadeColorsProps,
      sizeProps,
      textColorHelpersProps,
    },
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
      onClick,
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
      helpersPropsToClassnames(helpersProps),
      mainColorsPropsToClassnames(mainColorsProps),
      shadeColorsPropsToClassnames(shadeColorsProps),
      sizePropsToClassnames(sizeProps),
      textColorHelpersPropsToClassnames(textColorHelpersProps),
    )

    if (href) {
      return (
        renderA({ className, href, ...props })
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
        onClick={onClick}
        {...props}
      >
        {this.props.children}
      </button>
    )
  }
}
