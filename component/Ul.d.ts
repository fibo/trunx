import * as React from 'react'
import { HelpersProps } from './modifiers'
interface UlProps
  extends React.HTMLAttributes<HTMLUListElement>,
    HelpersProps {}
export declare class Ul extends React.Component<UlProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
