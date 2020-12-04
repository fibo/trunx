import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}
export declare class Subtitle extends React.Component<SubtitleProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
