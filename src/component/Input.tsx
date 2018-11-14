import * as classnames from "classnames"
import * as React from "react"

interface IInputProps {
  disabled?: boolean
  inputRef?: React.RefObject<HTMLInputElement>
  isDanger?: boolean
  isFocused?: boolean
  isHovered?: boolean
  isInfo?: boolean
  isLarge?: boolean
  isMedium?: boolean
  isPrimary?: boolean
  isRounded?: boolean
  isSmall?: boolean
  isStatic?: boolean
  isSuccess?: boolean
  isWarning?: boolean
  readOnly?: boolean
  type?: "email" | "password" | "tel" | "text"
}

export default class Input extends React.Component<IInputProps> {
  render() {
    const {
      disabled,
      inputRef,
      isDanger,
      isFocused,
      isHovered,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isRounded,
      isSmall,
      isStatic,
      isSuccess,
      isWarning,
      readOnly,
      type,
      ...props
    } = this.props

    const className = classnames("input", {
      "is-danger": isDanger,
      "is-focused": isFocused,
      "is-hovered": isHovered,
      "is-info": isInfo,
      "is-large": isLarge,
      "is-medium": isMedium,
      "is-primary": isPrimary,
      "is-rounded": isRounded,
      "is-small": isSmall,
      "is-static": isStatic,
      "is-success": isSuccess,
      "is-warning": isWarning,
    })

    return (
      <input
        className={className}
        disabled={disabled}
        readOnly={readOnly}
        ref={inputRef}
        type={type}
        {...props}
      />
    )
  }
}
