import * as React from 'react'
import { HelpersProps, SizeProps } from './modifiers'
interface FieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    SizeProps {
  hasAddons?: boolean
  hasAddonsCentered?: boolean
  isGrouped?: boolean
  isGroupedMultiline?: boolean
  isHorizontal?: boolean
}
interface FieldBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    SizeProps {
  isNormal?: boolean
}
declare class FieldBody extends React.Component<FieldBodyProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class FieldLabel extends React.Component<FieldLabelProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Field extends React.Component<FieldProps> {
  static Body: typeof FieldBody
  static Label: typeof FieldLabel
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
