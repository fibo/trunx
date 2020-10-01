import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface ISpanProps extends IBackgroundColorHelpersProps,
                             ITextColorHelpersProps,
                             React.HTMLAttributes<HTMLSpanElement> {}

export default class Span extends React.Component<ISpanProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <span
        {...props}
        className={classnames(
          className,
          backgroundColorHelpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</span>
    )
  }
}
