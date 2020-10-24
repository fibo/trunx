import * as React from 'react'
import { MainColorsProps, TextColorHelpersProps } from './modifiers'
interface HelpProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    MainColorsProps,
    TextColorHelpersProps {}
export declare class Help extends React.Component<HelpProps> {
  render(): React.ReactNode
}
export {}
