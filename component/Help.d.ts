import * as React from 'react'
import { MainColorsProps, TextColorHelpersProps } from './modifiers'
interface HelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    MainColorsProps,
    TextColorHelpersProps {}
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
