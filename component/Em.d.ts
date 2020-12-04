import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface EmProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export declare class Em extends React.Component<EmProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
