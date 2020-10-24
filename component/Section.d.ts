import * as React from 'react'
import { HelpersProps } from './modifiers'
interface SectionProps extends React.HTMLAttributes<HTMLElement>, HelpersProps {
  isLarge?: boolean
  isMedium?: boolean
}
export declare class Section extends React.Component<SectionProps> {
  render(): React.ReactNode
}
export {}
