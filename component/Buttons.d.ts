import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface ButtonsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {
  areLarge?: boolean
  areMedium?: boolean
  areSmall?: boolean
}
export declare class Buttons extends React.Component<ButtonsProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): JSX.Element | null
}
