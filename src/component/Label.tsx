import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  ITextColorHelpersProps,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface ILabelProps extends ISizeProps, ITextColorHelpersProps {}

export default class Label extends React.Component<ILabelProps> {
  render() {
    const className = classnames("label",
      sizePropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <label className={className}>{this.props.children}</label>
    )
  }
}
