import * as classnames from "classnames"
import * as React from "react"

interface IInputProps {
  inputRef?: React.RefObject<HTMLInputElement>
  isDanger?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isSmall?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  type?: "email" | "password" | "tel" | "text"
}

export default class Input extends React.Component<IInputProps> {
  render() {
    const {
      inputRef,
      isDanger,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isSmall,
      isSuccess,
      isWarning,
      type,
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
      "is-warning": isWarning,
    })

    return (
      <input
        className={className}
        ref={inputRef}
        type={type}
        {...props}
      />
    )
  }
}
