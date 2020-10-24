import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class Box extends React.Component<BoxProps> {
  render(): React.ReactNode
}
