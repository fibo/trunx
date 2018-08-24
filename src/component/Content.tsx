import * as classnames from "classnames"
import * as React from "react"

interface IContentProps {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
}

export default class Content extends React.Component<IContentProps> {
  render() {
    const {
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
      isLarge,
      isMedium,
      isSmall,
    } = this.props

    const className = classnames(["content"], {
      "has-text-centered": hasTextCentered,
      "has-text-justified": hasTextJustified,
      "has-text-left": hasTextLeft,
      "has-text-right": hasTextRight,
      "is-large": isLarge,
      "is-medium": isMedium,
      "is-small": isSmall,
    })

    return (
      <div className={className}>{this.props.children}</div>
    )
  }
}
