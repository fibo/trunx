import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  ITextColorHelpersProps,
  helpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IButtonsProps extends IHelpersProps, ITextColorHelpersProps {}

export default class Buttons extends React.Component<IButtonsProps> {
  render() {
    const className = classnames("buttons",
      helpersPropsToClassnames(this.props),
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
