import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IFooterProps extends ITextColorHelpersProps {}

export default class Footer extends React.Component<IFooterProps> {
  render() {
    const className = classnames("footer",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <footer className={className}>{this.props.children}</footer>
    )
  }
}
