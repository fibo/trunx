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
declare type FieldBodyProps = React.HTMLAttributes<HTMLDivElement>
interface FieldLabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SizeProps {
  isNormal?: boolean
}
declare class FieldBody extends React.Component<FieldBodyProps> {
  render(): React.ReactNode
}
declare class FieldLabel extends React.Component<FieldLabelProps> {
  render(): React.ReactNode
}
export declare class Field extends React.Component<FieldProps> {
  static Body: typeof FieldBody
  static Label: typeof FieldLabel
  render(): React.ReactNode
}
export {}
