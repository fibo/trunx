import * as React from 'react'
export declare type RadioProps = React.InputHTMLAttributes<HTMLInputElement>
export declare class Radio extends React.Component<RadioProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
