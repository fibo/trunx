import * as React from 'react'
import { HelpersProps } from './modifiers'
interface StrongProps extends React.HTMLAttributes<HTMLElement>, HelpersProps {}
export declare class Strong extends React.Component<StrongProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): {} | null | undefined
}
export {}
