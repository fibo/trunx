import * as classnames from "classnames"
import * as React from "react"

interface ITagsProps extends React.HTMLAttributes<HTMLDivElement> {
  areLarge?: boolean
  areMedium?: boolean
  hasAddons?: boolean
}

export default class Tags extends React.Component<ITagsProps> {
  render() {
    const {
      areLarge,
      areMedium,
      children,
      hasAddons,
      ...props
    } = this.props

    const className = classnames("tags", {
      "are-large": areLarge,
      "are-medium": areMedium,
      "has-addons": hasAddons,
    })

    return (
      <div {...props} className={className}>{children}</div>
    )
  }
}
