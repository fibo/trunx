import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IStrongProps extends ITextColorHelpersProps {}

export default class Strong extends React.Component<IStrongProps> {
  render() {
    const className = classnames(
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <strong className={className}>{this.props.children}</strong>
    )
  }
}
