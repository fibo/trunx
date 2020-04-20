import * as classnames from "classnames"
import * as React from "react"

import {
  IFloatHelpersProps,
  floatHelpersPropsToClassnames,
} from "./modifiers"

interface IAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
                          IFloatHelpersProps {
  isActive?: boolean
}

export default class A extends React.Component<IAProps> {
  render() {
    const {
      children,
      className,
      isActive,
      isClearfix,
      isPulledLeft,
      isPulledRight,
      ...props
    } = this.props

    return (
      <a
        {...props}
        className={classnames(
          className,
          {
            "is-active": isActive,
          },
          floatHelpersPropsToClassnames({
            isClearfix,
            isPulledLeft,
            isPulledRight,
          })
        )}
      >
        {children}
      </a>
    )
  }
}
