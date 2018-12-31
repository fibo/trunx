import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IProgressProps extends IMainColorsProps, ISizeProps {
  max: number
  value: number
}

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
      max,
      value,
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
      <progress
        className={className}
        max={max}
        value={value}
      >
        {this.props.children}
      </progress>
    )
  }
}
