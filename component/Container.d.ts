import * as React from 'react'
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  isFluid?: boolean
  isFullhd?: boolean
  isWidescreen?: boolean
}
export declare class Container extends React.Component<ContainerProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
