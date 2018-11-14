import * as classnames from "classnames"
import * as React from "react"

interface IControlProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLarge?: boolean
  isLoading?: boolean
  isMedium?: boolean
  isSmall?: boolean
}

export default class Control extends React.Component<IControlProps> {
  render() {
    const {
      hasIconsLeft,
      hasIconsRight,
      isExpanded,
      isLarge,
      isLoading,
      isMedium,
      isSmall,
    } = this.props

    const className = classnames("control", {
      "has-icons-left": hasIconsLeft,
      "has-icons-right": hasIconsRight,
      "is-expanded": isExpanded,
      "is-large": isLarge,
      "is-loading": isLoading,
      "is-medium": isMedium,
      "is-small": isSmall,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
