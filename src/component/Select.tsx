import * as classnames from "classnames"
import * as React from "react"

interface ISelectProps {
  isDanger?: boolean
  isFocused?: boolean
  isHovered?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isLoading?: boolean
  isMedium?: boolean
  isMultiple?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  size?: number
}

export default class Select extends React.Component<ISelectProps> {
  render() {
    const {
      isDanger,
      isFocused,
      isHovered,
      isInfo,
      isLarge,
      isLoading,
      isMedium,
      isMultiple,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      size,
    } = this.props

    const className = classnames("select", {
      "is-danger": isDanger,
      "is-focused": isFocused,
      "is-hovered": isHovered,
      "is-info": isInfo,
      "is-large": isLarge,
      "is-loading": isLoading,
      "is-medium": isMedium,
      "is-multiple": isMultiple,
      "is-primary": isPrimary,
      "is-small": isSmall,
      "is-success": isSuccess,
      "is-warning": isWarning,
    })

    return (
      <div className={className}>
        <select
          multiple={isMultiple}
          size={size}
        >
          {this.props.children}
        </select>
      </div>
    )
  }
}
