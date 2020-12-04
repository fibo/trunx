import * as React from 'react'
import {
  BackgroundColorHelpersProps,
  SizeProps,
  TextColorHelpersProps,
} from './modifiers'
export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps,
    SizeProps {
  isLeft?: boolean
  isRight?: boolean
}
export interface IconSvgProps {
  className?: string
  fill?: string
  icon?: {
    d: string
    viewBox: string
  }
  size?: string
}
declare class IconSvg extends React.Component<IconSvgProps> {
  static defaultProps: {
    fill: string
    size: string
    icon: {
      d: string
      viewBox: string
    }
  }
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Icon extends React.Component<IconProps> {
  static Svg: typeof IconSvg
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
