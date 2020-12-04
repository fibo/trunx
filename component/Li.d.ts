import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface LiProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    HelpersProps {
  isActive?: boolean
}
export declare class Li extends React.Component<LiProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
