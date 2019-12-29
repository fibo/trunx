import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IBoxProps extends IBackgroundColorHelpersProps,
                            ITextColorHelpersProps,
                            React.HTMLAttributes<HTMLDivElement> {}

export default class Box extends React.Component<IBoxProps> {
  render() {
    const {
      children,
      ...props
    } = this.props

    const className = classnames("box",
      backgroundColorHelpersPropsToClassnames(props),
      textColorHelpersPropsToClassnames(props),
    )

    return (
      <div className={className}>{children}</div>
    )
  }
}
