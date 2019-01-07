import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IMainColorsProps,
  ISizeProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IButtonProps extends IAnchorProps,
                               IMainColorsProps,
                               ISizeProps,
                               ITextColorHelpersProps {
  disabled?: boolean
  isActive?: boolean
  isBlack?: boolean
  isDark?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isInverted?: boolean
  isLight?: boolean
  isLink?: boolean
  isLoading?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isText?: boolean
  isWhite?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  type?: "reset" | "submit"
  value: string | number | string[] | undefined // same as in InputHTMLAttributes from @types/react
}

export default class Button extends React.Component<IButtonProps> {
  render() {
    const {
      AnchorComponent,
      disabled,
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
      hrefProp,
      isActive,
      isBlack,
      isDanger,
      isDark,
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
      isSmall,
      isSuccess,
      isRounded,
      isStatic,
      isText,
      isWarning,
      isWhite,
      onClick,
      type,
      value,
      ...props
    } = this.props

    const className = classnames("button",
      {
        "is-active": isActive,
        "is-black": isBlack,
        "is-dark": isDark,
        "is-focused": isFocused,
        "is-fullwidth": isFullwidth,
        "is-inverted": isInverted,
        "is-light": isLight,
        "is-link": isLink,
        "is-loading": isLoading,
        "is-normal": isNormal,
        "is-outlined": isOutlined,
        "is-rounded": isRounded,
        "is-static": isStatic,
        "is-text": isText,
        "is-white": isWhite,
      },
      mainColorsPropsToClassenames({
        isDanger,
        isInfo,
        isPrimary,
        isSuccess,
        isWarning,
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
          AnchorComponent={AnchorComponent}
          className={className}
          href={href}
          hrefProp={hrefProp}
          {...props}
        >
          {this.props.children}
        </Anchor>
      )
    }

    if (type) {
      if (isLoading) {
        return (
          <button
            className={className}
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
