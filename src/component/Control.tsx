import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassnames,
} from "./modifiers"

interface IControlProps extends ISizeProps {
  children?: React.ReactNode
  className?: string
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}

export default class Control extends React.Component<IControlProps> {
  render() {
    const {
      children,
      className,
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLoading,
    } = this.props

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
          sizePropsToClassnames(this.props),
        )}
      >{children}</div>
    )
  }
}
