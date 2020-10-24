import * as React from 'react'
import { AlignementHelpersProps, TextColorHelpersProps } from './modifiers'
export interface LevelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {
  isMobile?: boolean
}
export interface LevelItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AlignementHelpersProps,
    TextColorHelpersProps {
  as?: 'a' | 'div'
}
export interface LevelLeftProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {}
export interface LevelRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {}
declare class LevelItem extends React.Component<LevelItemProps> {
  static defaultProps: {
    as: string
  }
  render(): React.ReactNode
}
declare class LevelLeft extends React.Component<LevelLeftProps> {
  render(): React.ReactNode
}
declare class LevelRight extends React.Component<LevelRightProps> {
  render(): React.ReactNode
}
export declare class Level extends React.Component<LevelProps> {
  static Item: typeof LevelItem
  static Left: typeof LevelLeft
  static Right: typeof LevelRight
  render(): React.ReactNode
}
export {}
