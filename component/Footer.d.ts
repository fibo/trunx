import * as React from 'react'
import { TextColorHelpersProps } from './modifiers'
export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    TextColorHelpersProps {}
export declare class Footer extends React.Component<FooterProps> {
  render(): React.ReactNode
}
