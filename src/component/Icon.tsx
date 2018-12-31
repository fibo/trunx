import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  sizePropsToClassenames,
} from "./modifiers"

interface IIconProps extends ISizeProps {
  hasTextDanger?: boolean
  hasTextInfo?: boolean
  hasTextSuccess?: boolean
  hasTextWarning?: boolean
  isLeft?: boolean
  isRight?: boolean
}

interface IIconSvgProps {
  icon: {
    d: string
    viewBox: string
  }
  size: string
}

class IconSvg extends React.Component<IIconSvgProps> {
  static defaultProps = {
    size: "1em"
  }

  render() {
    const {
      icon,
      size,
    } = this.props

    return (
      <svg
        aria-hidden="true"
        height={size}
        role="img"
        viewBox={icon.viewBox}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d={icon.d}
        />
      </svg>
    )
  }
}

export default class Icon extends React.Component<IIconProps> {
  static Svg = IconSvg

  render() {
    const {
      hasTextDanger,
      hasTextInfo,
      hasTextSuccess,
      hasTextWarning,
      isLeft,
      isRight,
    } = this.props

    const className = classnames("icon",
      {
        "has-text-danger": hasTextDanger,
        "has-text-info": hasTextInfo,
        "has-text-success": hasTextSuccess,
        "has-text-warning": hasTextWarning,
        "is-left": isLeft,
        "is-right": isRight,
      },
      sizePropsToClassenames(this.props),
    )

    return (
      <span className={className}>{this.props.children}</span>
   )
  }
}
