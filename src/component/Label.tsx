import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface ILabelProps extends ITextColorHelpersProps {}

export default class Label extends React.Component<ILabelProps> {
  render() {
    const className = classnames("label",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <label className={className}>{this.props.children}</label>
    )
  }
}
