import * as classnames from "classnames"
import * as React from "react"

interface IControlProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
}

export default class Control extends React.Component<IControlProps> {
  render() {
    const {
      hasIconsLeft,
      hasIconsRight,
      isExpanded
    } = this.props

    const className = classnames("control", {
      "has-icons-left": hasIconsLeft,
      "has-icons-right": hasIconsRight,
      "is-expanded": isExpanded
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
