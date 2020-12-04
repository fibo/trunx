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
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class HeroFoot extends React.Component<HeroFootProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class HeroHead extends React.Component<HeroHeadProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Hero extends React.Component<HeroProps> {
  static Body: typeof HeroBody
  static Foot: typeof HeroFoot
  static Head: typeof HeroHead
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
