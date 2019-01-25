import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IProgressProps extends IMainColorsProps,
                                 ISizeProps,
                                 React.ProgressHTMLAttributes<HTMLProgressElement> {}

export default class Progress extends React.Component<IProgressProps> {
  render() {
    const {
      isDanger,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      ...props
    } = this.props

    const className = classnames("progress",
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

    return (
      <progress {...props} className={className}>{this.props.children}</progress>
    )
  }
}
