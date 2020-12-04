import * as React from 'react'
export declare type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>
export declare class Checkbox extends React.Component<CheckboxProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): JSX.Element | null
}
