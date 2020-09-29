import * as classnames from "classnames"
import * as React from "react"

import {
  IMainColorsProps,
  ISizeProps,
  mainColorsPropsToClassnames,
  sizePropsToClassnames,
} from "./modifiers"

interface IInputProps extends IMainColorsProps,
                              ISizeProps,
                              React.InputHTMLAttributes<HTMLInputElement> {
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
}

export default class Input extends React.Component<IInputProps> {
  render() {
    const {
      className,
      isDanger,
      isFocused,
      isHovered,
      isInfo,
      isLarge,
      isMedium,
      isPrimary,
      isRounded,
      isSmall,
      isSuccess,
      isStatic,
      isWarning,
      type,
      ...props
    } = this.props

    return (
      <input
        className={classnames(
          "input",
          className,
          {
            "is-focused": isFocused,
            "is-hovered": isHovered,
            "is-rounded": isRounded,
            "is-static": isStatic,
          },
          mainColorsPropsToClassnames({
            isDanger,
            isInfo,
            isPrimary,
            isSuccess,
            isWarning,
          }),
          sizePropsToClassnames({
            isLarge,
            isMedium,
            isSmall,
          }),
        )}
        type={type}
        {...props}
      />
    )
  }
}
