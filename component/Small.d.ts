import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
export interface SmallProps
  extends React.HTMLAttributes<HTMLElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class Small extends React.Component<SmallProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
