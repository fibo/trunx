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
  children?: React.ReactNode
  className?: string
  isLeft?: boolean
  isRight?: boolean
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
}

interface IIconSvgProps {
  className?: string
  fill?: string
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
      className,
      icon,
      fill,
      size,
    } = this.props

    return (
      <svg
        aria-hidden="true"
        className={className}
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
      children,
      className,
      isLeft,
      isRight,
      onClick,
    } = this.props

    return (
      <span className={classnames(
        "icon",
        className,
        {
          "is-left": isLeft,
          "is-right": isRight,
        },
        backgroundColorHelpersPropsToClassnames(this.props),
        textColorHelpersPropsToClassnames(this.props),
        sizePropsToClassnames(this.props),
      )}
      onClick={onClick}
      >
       {children}
      </span>
   )
  }
}
