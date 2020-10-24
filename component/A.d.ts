import * as React from 'react'
import { FloatHelpersProps } from './modifiers'
export interface AProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    FloatHelpersProps {
  isActive?: boolean
}
export declare class A extends React.Component<AProps> {
  render(): React.ReactNode
}
