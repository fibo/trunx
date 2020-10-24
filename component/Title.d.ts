import * as React from 'react'
import { TextColorHelpersProps } from './modifiers'
export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    TextColorHelpersProps {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  isSpaced?: boolean
}
export declare class Title extends React.Component<TitleProps> {
  render(): React.ReactNode
}
