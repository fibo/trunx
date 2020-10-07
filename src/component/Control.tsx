import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  extractModifiersProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IControlProps extends ISizeProps,
                                React.HTMLAttributes<HTMLDivElement> {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}

export default class Control extends React.Component<IControlProps> {
  render() {
    const [{
      sizeProps,
    }, {
      children,
      className,
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
      ...props
    }] = extractModifiersProps(this.props)

    return (
      <div
        className={classnames(
          "control",
          className,
          {
            "has-icons-left": hasIconsLeft,
            "has-icons-right": hasIconsRight,
            "is-expanded": isExpanded,
            "is-loading": isLoading,
          },
          sizePropsToClassnames(sizeProps),
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
}
