import * as React from 'react'
import { MainColorsProps, ShadeColorsProps, SizeProps } from './modifiers'
export interface ProgressProps
  extends React.ProgressHTMLAttributes<HTMLProgressElement>,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {}
export declare class Progress extends React.Component<ProgressProps> {
  render(): React.ReactNode
}
