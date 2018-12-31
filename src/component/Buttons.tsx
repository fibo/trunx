import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IButtonsProps extends ITextColorHelpersProps {}

export default class Buttons extends React.Component<IButtonsProps> {
  render() {
    const className = classnames("buttons",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
