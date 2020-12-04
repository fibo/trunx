import * as React from 'react'
import { TextColorHelpersProps } from './modifiers'
export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    TextColorHelpersProps {}
export declare class Footer extends React.Component<FooterProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
