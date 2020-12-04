import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
export declare class Box extends React.Component<BoxProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): {} | null | undefined
}
