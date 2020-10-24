import * as React from 'react'
export interface LiProps extends React.LiHTMLAttributes<HTMLLIElement> {
  isActive?: boolean
}
export declare class Li extends React.Component<LiProps> {
  render(): React.ReactNode
}
