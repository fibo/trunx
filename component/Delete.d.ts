import * as React from 'react'
import { HelpersProps, SizeProps } from './modifiers'
export interface DeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    HelpersProps,
    SizeProps {}
export declare class Delete extends React.Component<DeleteProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
