import * as React from 'react'
import {
  AlignementHelpersProps,
  BackgroundColorHelpersProps,
  TextColorHelpersProps,
} from './modifiers'
export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    AlignementHelpersProps,
    BackgroundColorHelpersProps,
    TextColorHelpersProps {}
export declare class P extends React.Component<PProps> {
  render(): React.ReactNode
}
