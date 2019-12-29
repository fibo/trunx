import * as classnames from "classnames"
import * as React from "react"

import {
  IFloatHelpersProps,
  floatHelpersPropsToClassnames,
} from "./modifiers"

interface IAProps extends IFloatHelpersProps,
                          React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}

export default class A extends React.Component<IAProps> {
  render() {
    const {
      children,
      isActive,
      isClearfix,
      isPulledLeft,
      isPulledRight,
      ...props
    } = this.props

    const className = classnames(
      {
        "is-active": isActive,
      },
      floatHelpersPropsToClassnames({
        isClearfix,
        isPulledLeft,
        isPulledRight,
      })
    )

    return (
      <a {...props} className={className}>{children}</a>
    )
  }
}
