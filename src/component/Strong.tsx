import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IStrongProps extends React.HTMLAttributes<HTMLElement>,
                               IBackgroundColorHelpersProps,
                               ITextColorHelpersProps {}

export default class Strong extends React.Component<IStrongProps> {
  render() {
    const {
      children,
      className,
      ...props
    } = this.props

    return (
      <strong
        className={classnames(
          className,
          backgroundColorHelpersPropsToClassnames(props),
          textColorHelpersPropsToClassnames(props),
        )}
      >{children}</strong>
    )
  }
}
