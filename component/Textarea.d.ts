import * as React from 'react'
import { MainColorsProps, SizeProps, TextColorHelpersProps } from './modifiers'
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    MainColorsProps,
    SizeProps,
    TextColorHelpersProps {
  isFocused?: boolean
  isHovered?: boolean
}
export declare class Textarea extends React.Component<TextareaProps> {
  render(): React.ReactNode
}
