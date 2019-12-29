import * as classnames from "classnames"
import * as React from "react"

import {
  IBackgroundColorHelpersProps,
  ISizeProps,
  ITextColorHelpersProps,
  backgroundColorHelpersPropsToClassnames,
  sizePropsToClassnames,
  textColorHelpersPropsToClassnames,
} from "./modifiers"

interface IIconProps extends IBackgroundColorHelpersProps,
                             ITextColorHelpersProps,
                             ISizeProps {
  isLeft?: boolean
  isRight?: boolean
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
}

interface IIconSvgProps {
  fill?: string,
  icon: {
    d: string
    viewBox: string
  }
  size: string
}

class IconSvg extends React.Component<IIconSvgProps> {
  static defaultProps = {
    fill: "currentColor",
    size: "1em"
  }

  render() {
    const {
      icon,
      fill,
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
          fill={fill}
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
      backgroundColorHelpersPropsToClassnames(this.props),
      textColorHelpersPropsToClassnames(this.props),
      sizePropsToClassnames(this.props),
    )

    return (
      <span className={className} onClick={onClick}>{this.props.children}</span>
   )
  }
}
