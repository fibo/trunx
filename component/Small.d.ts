import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface SmallProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export declare class Small extends React.Component<SmallProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
