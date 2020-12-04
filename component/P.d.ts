import * as React from 'react'
import {
  AlignementHelpersProps,
  BackgroundColorHelpersProps,
  SpacingHelpersProps,
  TextColorHelpersProps,
} from './modifiers'
export interface PProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    AlignementHelpersProps,
    BackgroundColorHelpersProps,
    SpacingHelpersProps,
    TextColorHelpersProps {}
export declare class P extends React.Component<PProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
