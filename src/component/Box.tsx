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
      className,
      ...props
    } = this.props

    return (
      <div className={classnames(
        "box",
        className,
        backgroundColorHelpersPropsToClassnames(props),
        textColorHelpersPropsToClassnames(props),
       )}
      >
       {children}
      </div>
    )
  }
}
