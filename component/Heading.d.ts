import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}
export declare class Heading extends React.Component<HeadingProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
