import * as React from 'react'
import {
  BackgroundColorHelpersProps,
  FloatHelpersProps,
  TextColorHelpersProps,
} from './modifiers'
export interface DivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BackgroundColorHelpersProps,
    FloatHelpersProps,
    TextColorHelpersProps {}
export declare class Div extends React.Component<DivProps> {
  render(): React.ReactNode
}
