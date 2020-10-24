import * as React from 'react'
import { MainColorsProps, SizeProps } from './modifiers'
interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    MainColorsProps,
    SizeProps {
  isFocused?: boolean
  isHovered?: boolean
  isRounded?: boolean
  isStatic?: boolean
}
export declare class Input extends React.Component<IInputProps> {
  render(): React.ReactNode
}
export {}
