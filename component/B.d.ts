import * as React from 'react'
import { BackgroundColorHelpersProps, TextColorHelpersProps } from './modifiers'
export interface BProps
  extends React.HTMLAttributes<HTMLElement>,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class B extends React.Component<BProps> {
  render(): React.ReactNode
}
