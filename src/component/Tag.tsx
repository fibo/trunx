import * as classnames from "classnames"
import * as React from "react"

import {
  Anchor,
  IAnchorProps,
} from "./Anchor"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface ITagProps extends IAnchorProps,
                            IMainColorsProps,
                            ISizeProps {
  isBlack?: boolean
  isDark?: boolean
  isLight?: boolean
  isLink?: boolean
  isRounded?: boolean
  isWhite?: boolean
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
        "is-link": isLink,
        "is-rounded": isRounded,
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
    )

    return href ? (
      <Anchor
        AnchorComponent={AnchorComponent}
        className={className}
        href={href}
        hrefProp={hrefProp}
        {...props}
      >
        {this.props.children}
      </Anchor>
    ) : (
      <span className={className}>{this.props.children}</span>
    )
  }
}
