import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IBoxProps extends ITextColorHelpersProps {}

export default class Box extends React.Component<IBoxProps> {
  render() {
    const className = classnames("box",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
