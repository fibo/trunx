import * as classnames from "classnames"
import * as React from "react"

import {
  ISizeProps,
  ITextColorHelpersProps,
  sizePropsToClassenames,
  textColorHelpersPropsToClassenames,
} from "./modifiers"

interface IIconProps extends ITextColorHelpersProps,
                             ISizeProps {
  isLeft?: boolean
  isRight?: boolean
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
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
      onClick,
      isLeft,
      isRight,
    } = this.props

    const className = classnames("icon",
      {
        "is-left": isLeft,
        "is-right": isRight,
      },
      textColorHelpersPropsToClassenames(this.props),
      sizePropsToClassenames(this.props),
    )

    return (
      <span className={className} onClick={onClick}>{this.props.children}</span>
   )
  }
}
