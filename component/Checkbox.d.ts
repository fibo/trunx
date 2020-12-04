import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HelpersProps {}
export declare class Checkbox extends React.Component<CheckboxProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): JSX.Element | null
}
