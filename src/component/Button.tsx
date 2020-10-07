import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

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

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
                               IHelpersProps,
                               IMainColorsProps,
                               IShadeColorsProps,
                               ISizeProps,
                               ITextColorHelpersProps {
  download?: IAnchorProps["download"]
  href?: IAnchorProps["href"]
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
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  target?: IAnchorProps["target"]
  type?: "reset" | "submit"
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"]
}

export default class Button extends React.Component<IButtonProps> {
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
      download,
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

    const className = classnames("button",
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
        <Anchor
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
          {...props}
        >
          {children}
        </Anchor>
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
