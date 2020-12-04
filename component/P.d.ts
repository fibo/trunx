import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}
export declare class P extends React.Component<PProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
