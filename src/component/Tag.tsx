import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IMainColorsProps,
  IShadeColorsProps,
  ISizeProps,
  mainColorsPropsToClassnames,
  shadeColorsPropsToClassnames,
  sizePropsToClassnames,
} from "./modifiers"

interface ITagProps extends IMainColorsProps,
                            IShadeColorsProps,
                            Pick<ISizeProps, "isMedium" | "isLarge"> {
  children?: React.ReactNode
  className?: string
  href?: IAnchorProps["href"]
  isDelete?: boolean
  isNormal?: boolean
  isRounded?: boolean
  onClick?: IAnchorProps["onClick"]
  target?: IAnchorProps["target"]
}

export default class Tag extends React.Component<ITagProps> {
  render() {
    const {
      children,
      className: classNameProp,
      href,
      isBlack,
      isDanger,
      isDark,
      isDelete,
      isInfo,
      isLarge,
      isLight,
      isLink,
      isMedium,
      isNormal,
      isPrimary,
      isRounded,
      isSuccess,
      isWarning,
      isWhite,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames(
      "tag",
      classNameProp,
      {
        "is-delete": isDelete,
        "is-light": isLight,
        "is-normal": isNormal,
        "is-rounded": isRounded,
      },
      mainColorsPropsToClassnames({
        isDanger,
        isInfo,
        isLink,
        isPrimary,
        isSuccess,
        isWarning,
      }),
      shadeColorsPropsToClassnames({
        isBlack,
        isDark,
        isLight,
        isWhite,
      }),
      sizePropsToClassnames({
        isLarge,
        isMedium,
      }),
    )

    if (href || onClick) {
      return (
        <Anchor
          {...props}
          className={className}
          href={href}
          onClick={onClick}
          target={target}
        >
          {children}
        </Anchor>
      )
    } else {
      return (
        <span {...props} className={className}>{children}</span>
      )
    }
  }
}
