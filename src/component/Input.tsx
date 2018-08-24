import * as classnames from "classnames"
import * as React from "react"

interface IInputProps {
  isDanger?: boolean
  isInfo?: boolean,
  isLarge?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

export default class Input extends React.Component<IInputProps> {
  render() {
    const {
      isDanger,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      ...props
    } = this.props

    const className = classnames("input", {
      "is-danger": isDanger,
      "is-info": isInfo,
      "is-large": isLarge,
      "is-medium": isMedium,
      "is-primary": isPrimary,
      "is-small": isSmall,
      "is-success": isSuccess,
      "is-warning": isWarning
    })

    return (
      <input className={className} {...props}/>
    )
  }
}
