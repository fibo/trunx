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

interface IButtonProps extends IAnchorProps,
                               IHelpersProps,
                               IMainColorsProps,
                               IShadeColorsProps,
                               ISizeProps,
                               ITextColorHelpersProps {
  disabled?: boolean
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
      isInvisible,
      isLarge,
      isLight,
      isLink,
      isLoading,
      isMedium,
      isNormal,
      isOutlined,
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
