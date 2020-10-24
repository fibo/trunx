import * as React from 'react'
import { SizeProps } from './modifiers'
export interface ControlProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SizeProps {
  hasIconsLeft?: boolean
  hasIconsRight?: boolean
  isExpanded?: boolean
  isLoading?: boolean
}
export declare class Control extends React.Component<ControlProps> {
  render(): React.ReactNode
}
