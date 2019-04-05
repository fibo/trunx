import * as classnames from "classnames"
import * as React from "react"

interface ITagsProps {
  areLarge?: boolean
  areMedium?: boolean
  hasAddons?: boolean
}

export default class Tags extends React.Component<ITagsProps> {
  render() {
    const {
      areLarge,
      areMedium,
      hasAddons,
    } = this.props

    const className = classnames("tags", {
      "are-large": areLarge,
      "are-medium": areMedium,
      "has-addons": hasAddons,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
