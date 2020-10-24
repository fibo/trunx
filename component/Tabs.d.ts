import * as React from 'react'
import { SizeProps } from './modifiers'
export interface TabsProps
  extends React.HTMLAttributes<HTMLElement>,
    SizeProps {
  isBoxed?: boolean
  isCentered?: boolean
  isFullwidth?: boolean
  isRight?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
}
export declare class Tabs extends React.Component<TabsProps> {
  render(): React.ReactNode
}
