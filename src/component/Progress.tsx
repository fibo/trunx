import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IProgressProps extends ISizeProps {
  max: number
  value: number
}

export default class Progress extends React.Component<IProgressProps> {
  render() {
    const {
      max,
      value,
    } = this.props

    const className = classnames("tag",
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props),
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
