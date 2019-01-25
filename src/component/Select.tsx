import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface ISelectProps extends IMainColorsProps,
                               ISizeProps,
                               React.SelectHTMLAttributes<HTMLSelectElement> {
  isFocused?: boolean
  isHovered?: boolean
  isLoading?: boolean
  isMultiple?: boolean
}

export default class Select extends React.Component<ISelectProps> {
  render() {
    const {
      isFocused,
      isHovered,
      isLoading,
      isMultiple,
      ...props
    } = this.props

    const className = classnames("select",
      {
        "is-focused": isFocused,
        "is-hovered": isHovered,
        "is-loading": isLoading,
        "is-multiple": isMultiple,
      },
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props),
    )

    return (
      <div className={className}>
        <select {...props} multiple={isMultiple}>{this.props.children}</select>
      </div>
    )
  }
}
