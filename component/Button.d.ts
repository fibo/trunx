import * as React from 'react'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
} from './modifiers'
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {
  isActive?: boolean
  isFocused?: boolean
  isFullwidth?: boolean
  isInverted?: boolean
  isLoading?: boolean
  isNormal?: boolean
  isOutlined?: boolean
  isRounded?: boolean
  isStatic?: boolean
  isText?: boolean
}
export declare class Button extends React.Component<ButtonProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
