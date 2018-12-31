import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassenames,
  sizePropsToClassenames,
} from "./modifiers"

interface IInputProps extends IMainColorsProps, ISizeProps {
  inputRef?: React.RefObject<HTMLInputElement>
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
  type?: "email" | "password" | "tel" | "text"
}

export default class Input extends React.Component<IInputProps> {
  render() {
    const {
      inputRef,
      isFocused,
      isHovered,
      isRounded,
      isStatic,
      type,
      ...props
    } = this.props

    const className = classnames("input",
      {
        "is-focused": isFocused,
        "is-hovered": isHovered,
        "is-rounded": isRounded,
        "is-static": isStatic,
      },
      mainColorsPropsToClassenames(this.props),
      sizePropsToClassenames(this.props),
    )

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
