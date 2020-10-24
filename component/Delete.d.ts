import * as React from 'react'
import { SizeProps } from './modifiers'
export interface DeleteProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    SizeProps {}
export declare class Delete extends React.Component<DeleteProps> {
  render(): React.ReactNode
}
