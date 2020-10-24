import * as React from 'react'
import { MainColorsProps, SizeProps } from './modifiers'
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
  isLoading?: boolean
  isMultiple?: boolean
}
export declare class Select extends React.Component<SelectProps> {
  render(): React.ReactNode
}
