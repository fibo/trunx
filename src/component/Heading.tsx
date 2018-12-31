import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IHeadingProps extends ITextColorHelpersProps {}

export default class Footer extends React.Component<IHeadingProps> {
  render() {
    const className = classnames("heading",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <p className={className}>{this.props.children}</p>
    )
  }
}
