import * as React from 'react'
import { TextColorHelpersProps } from './modifiers'
export interface HeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    TextColorHelpersProps {}
export declare class Heading extends React.Component<HeadingProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
