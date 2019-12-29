import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ITextColorHelpersProps,
  mainColorsPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IHelpProps extends IMainColorsProps, ITextColorHelpersProps {}

export default class Help extends React.Component<IHelpProps> {
  render() {
    const className = classnames("help",
      mainColorsPropsToClassnames(this.props),
      textColorHelpersPropsToClassnames(this.props),
    )

    return (
      <p className={className}>{this.props.children}</p>
    )
  }
}
