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
  helpersPropsToClassenames,
  mainColorsPropsToClassenames,
  shadeColorsPropsToClassenames,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IButtonProps extends IHelpersProps,
                               IMainColorsProps,
                               IShadeColorsProps,
                               ISizeProps,
                               ITextColorHelpersProps,
                               React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  target?: IAnchorProps["target"]
  type?: "reset" | "submit"
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"]
}

export default class Button extends React.Component<IButtonProps> {
  render() {
    const {
      disabled,
      download,
      hasTextBlack,
      hasTextBlackBis,
      hasTextBlackTer,
      hasTextDanger,
      hasTextDark,
      hasTextGrey,
      hasTextGreyDark,
      hasTextGreyDarker,
      hasTextGreyLight,
      hasTextGreyLighter,
      hasTextInfo,
      hasTextLight,
      hasTextLink,
      hasTextPrimary,
      hasTextSuccess,
      hasTextWarning,
      hasTextWhite,
      hasTextWhiteBis,
      hasTextWhiteTer,
      href,
      isActive,
      isBlack,
      isDanger,
      isDark,
      isFocused,
      isFullwidth,
      isInfo,
      isInverted,
      isInvisible,
      isLarge,
      isLight,
      isLink,
      isLoading,
      isMarginLess,
      isMedium,
      isNormal,
      isOutlined,
      isPaddingLess,
      isPrimary,
      isSmall,
      isSrOnly,
      isSuccess,
      isRounded,
      isStatic,
      isText,
      isWarning,
      isWhite,
      onClick,
      target,
      type,
      value,
      ...props
    } = this.props

    const className = classnames("button",
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
      helpersPropsToClassenames({
        isInvisible,
        isMarginLess,
        isPaddingLess,
        isSrOnly,
      }),
      mainColorsPropsToClassenames({
        isDanger,
        isInfo,
        isLink,
        isPrimary,
        isSuccess,
        isWarning,
      }),
      shadeColorsPropsToClassenames({
        isBlack,
        isDark,
        isLight,
        isWhite,
      }),
      sizePropsToClassenames({
        isLarge,
        isMedium,
        isSmall,
      }),
      textColorHelpersPropsToClassenames({
        hasTextBlack,
        hasTextBlackBis,
        hasTextBlackTer,
        hasTextDanger,
        hasTextDark,
        hasTextGrey,
        hasTextGreyDark,
        hasTextGreyDarker,
        hasTextGreyLight,
        hasTextGreyLighter,
        hasTextInfo,
        hasTextLight,
        hasTextLink,
        hasTextPrimary,
        hasTextSuccess,
        hasTextWarning,
        hasTextWhite,
        hasTextWhiteBis,
        hasTextWhiteTer,
      }),
    )

    if (href) {
      return (
        <Anchor
          className={className}
          download={download}
          href={href}
          onClick={onClick}
          target={target}
        >
          {this.props.children}
        </Anchor>
      )
    }

    if (type) {
      if (disabled || isLoading) {
        return (
          <button
            className={className}
            disabled={disabled}
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
