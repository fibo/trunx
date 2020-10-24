import * as React from 'react'
import { MainColorsProps } from './modifiers'
export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MainColorsProps {
  isBold?: boolean
  isDark?: boolean
  isFullheightWithNavbar?: boolean
  isFullheight?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
}
declare type HeroBodyProps = React.HTMLAttributes<HTMLDivElement>
declare type HeroFootProps = React.HTMLAttributes<HTMLDivElement>
declare type HeroHeadProps = React.HTMLAttributes<HTMLDivElement>
declare class HeroBody extends React.Component<HeroBodyProps> {
  render(): React.ReactNode
}
declare class HeroFoot extends React.Component<HeroFootProps> {
  render(): React.ReactNode
}
declare class HeroHead extends React.Component<HeroHeadProps> {
  render(): React.ReactNode
}
export declare class Hero extends React.Component<HeroProps> {
  static Body: typeof HeroBody
  static Foot: typeof HeroFoot
  static Head: typeof HeroHead
  render(): React.ReactNode
}
export {}
