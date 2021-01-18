import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps, SizeProps } from './modifiers'
export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    ErrorBoundaryProps,
    HelpersProps,
    SizeProps {
  isLeft?: boolean
  isRight?: boolean
}
export interface IconSvgProps extends ErrorBoundaryProps {
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
