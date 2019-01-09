import * as classnames from "classnames"
import * as React from "react"

import {
  IHelpersProps,
  ITextColorHelpersProps,
  helpersPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IButtonsProps extends IHelpersProps, ITextColorHelpersProps {}

export default class Buttons extends React.Component<IButtonsProps> {
  render() {
    const className = classnames("buttons",
      helpersPropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
