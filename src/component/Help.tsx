import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IHelpProps extends IMainColorsProps, ITextColorHelpersProps {}

export default class Help extends React.Component<IHelpProps> {
  render() {
    const className = classnames("help",
      mainColorsPropsToClassenames(this.props),
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <p className={className}>{this.props.children}</p>
    )
  }
}
