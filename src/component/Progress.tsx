import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  IShadeColorsProps,
  ISizeProps,
  mainColorsPropsToClassnames,
  shadeColorsPropsToClassnames,
  sizePropsToClassnames,
} from "./modifiers"

interface IProgressProps extends IMainColorsProps,
                                 IShadeColorsProps,
                                 ISizeProps,
                                 React.ProgressHTMLAttributes<HTMLProgressElement> {}

export default class Progress extends React.Component<IProgressProps> {
  render() {
    const {
      isBlack,
      isDanger,
      isDark,
      isInfo,
      isLarge,
      isLight,
      isLink,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      isWhite,
      ...props
    } = this.props

    const className = classnames("progress",
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

    return (
      <progress {...props} className={className}>{this.props.children}</progress>
    )
  }
}
