import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IEmProps extends React.HTMLAttributes<HTMLElement>,
                           IBackgroundColorHelpersProps,
                           ITextColorHelpersProps {}

export default class Em extends React.Component<IEmProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <em
        className={classnames(
          className,
          backgroundColorHelpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</em>
    )
  }
}
