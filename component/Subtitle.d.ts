import * as React from 'react'
import { TextColorHelpersProps } from './modifiers'
export interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    TextColorHelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}
export declare class Subtitle extends React.Component<SubtitleProps> {
  render(): React.ReactNode
}
