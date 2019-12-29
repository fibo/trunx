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
                            ISizeProps {
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
      isSmall,
      isSuccess,
      isWarning,
      isWhite,
      onClick,
      target,
      ...props
    } = this.props

    const className = classnames("tag",
      {
        "is-black": isBlack,
        "is-dark": isDark,
        "is-delete": isDelete,
        "is-light": isLight,
        "is-normal": isNormal,
        "is-rounded": isRounded,
        "is-white": isWhite,
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
        isSmall,
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
