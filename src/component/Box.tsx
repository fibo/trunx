import * as classnames from "classnames"
import * as React from "react"

import {
  ITextColorHelpersProps,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IBoxProps extends ITextColorHelpersProps,
                            React.HTMLAttributes<HTMLDivElement> {}

export default class Box extends React.Component<IBoxProps> {
  render() {
    const {
      children,
      ...props
    } = this.props

    const className = classnames("box",
      textColorHelpersPropsToClassenames(this.props),
    )

    return (
      <div {...props} className={className}>{children}</div>
    )
  }
}
