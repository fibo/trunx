import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface UProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export declare class U extends React.Component<UProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
