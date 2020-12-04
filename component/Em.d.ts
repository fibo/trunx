import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
export interface EmProps
  extends React.HTMLAttributes<HTMLElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class Em extends React.Component<EmProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
