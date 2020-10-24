import * as React from 'react'
import { SizeProps, TextColorHelpersProps } from './modifiers'
interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    SizeProps,
    TextColorHelpersProps {}
export declare class Label extends React.Component<LabelProps> {
  render(): React.ReactNode
}
export {}
