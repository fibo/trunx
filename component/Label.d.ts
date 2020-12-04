import * as React from 'react'
import { SizeProps, TextColorHelpersProps } from './modifiers'
interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    SizeProps,
    TextColorHelpersProps {}
export declare class Label extends React.Component<LabelProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
