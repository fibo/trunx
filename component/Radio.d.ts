import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HelpersProps {}
export declare class Radio extends React.Component<RadioProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
