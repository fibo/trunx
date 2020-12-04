import * as React from 'react'
import { HelpersProps, MainColorsProps } from './modifiers'
interface HelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps,
    MainColorsProps {}
export declare class Help extends React.Component<HelpProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
