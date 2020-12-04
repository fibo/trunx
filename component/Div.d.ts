import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
export declare class Div extends React.Component<DivProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
