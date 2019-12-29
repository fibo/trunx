import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IControlProps extends ISizeProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}

export default class Control extends React.Component<IControlProps> {
  render() {
    const {
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
    } = this.props

    const className = classnames("control",
      {
        "has-icons-left": hasIconsLeft,
        "has-icons-right": hasIconsRight,
        "is-expanded": isExpanded,
        "is-loading": isLoading,
      },
      sizePropsToClassnames(this.props),
    )

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
