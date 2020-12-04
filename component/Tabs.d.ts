import * as React from 'react'
import { HelpersProps, SizeProps } from './modifiers'
export interface TabsProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps,
    SizeProps {
  isBoxed?: boolean
  isCentered?: boolean
  isFullwidth?: boolean
  isRight?: boolean
  isToggle?: boolean
  isToggleRounded?: boolean
}
export declare class Tabs extends React.Component<TabsProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
