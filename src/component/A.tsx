import * as classnames from "classnames"
import * as React from "react"

import {
  IFloatHelpersProps,
  extractModifiersProps,
  floatHelpersPropsToClassnames,
} from "./modifiers"

interface IAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
                          IFloatHelpersProps {
  isActive?: boolean
}

export default class A extends React.Component<IAProps> {
  render() {
    const [{
      floatHelpersProps,
    },
    {
      children,
      className,
      isActive,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <a
        className={classnames(
          className,
          {
            "is-active": isActive,
          },
          floatHelpersPropsToClassnames(floatHelpersProps),
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
}
