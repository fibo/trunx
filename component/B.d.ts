import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface BProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export declare class B extends React.Component<BProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
