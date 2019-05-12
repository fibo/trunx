import * as classnames from "classnames"
import * as React from "react"

import {
  IFloatHelpersProps,
  floatHelpersPropsToClassenames,
} from "./modifiers"

interface IAProps extends IFloatHelpersProps,
                          React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default class A extends React.Component<IAProps> {
  render() {
    const {
      isClearfix,
      isPulledLeft,
      isPulledRight,
      ...props
    } = this.props

    const className = classnames(
      floatHelpersPropsToClassenames({
        isClearfix,
        isPulledLeft,
        isPulledRight,
      })
    )

    return (
      <a {...props} className={className}>{this.props.children}</a>
    )
  }
}
