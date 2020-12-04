import * as React from 'react'
declare type UlProps = React.HTMLAttributes<HTMLUListElement>
export declare class Ul extends React.Component<UlProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
