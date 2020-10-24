import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
interface StrongProps
  extends React.HTMLAttributes<HTMLElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class Strong extends React.Component<StrongProps> {
  render(): React.ReactNode
}
export {}
