import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps, MainColorsProps, SizeProps } from './modifiers'
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ErrorBoundaryProps,
    HelpersProps,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
}
export declare class Input extends React.Component<InputProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
