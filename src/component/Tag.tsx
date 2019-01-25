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
  mainColorsPropsToClassenames,
  shadeColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface ITagProps extends IAnchorProps,
                            IMainColorsProps,
                            IShadeColorsProps,
                            ISizeProps {
  isRounded?: boolean
}

export default class Tag extends React.Component<ITagProps> {
  render() {
    const {
      AnchorComponent,
      href,
      hrefProp,
      isBlack,
      isDanger,
      isDark,
      isInfo,
      isLarge,
      isLight,
      isLink,
      isMedium,
      isPrimary,
      isRounded,
      isSmall,
      isSuccess,
      isWarning,
      isWhite,
      ...props
    } = this.props

    const className = classnames("tag",
      {
        "is-black": isBlack,
        "is-dark": isDark,
        "is-light": isLight,
        "is-rounded": isRounded,
        "is-white": isWhite,
      },
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
    )

    return href ? (
      <Anchor
        {...props}
        AnchorComponent={AnchorComponent}
        className={className}
        href={href}
        hrefProp={hrefProp}
      >
        {this.props.children}
      </Anchor>
    ) : (
      <span className={className}>{this.props.children}</span>
    )
  }
}
