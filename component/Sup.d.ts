import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface SupProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export declare class Sup extends React.Component<SupProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
