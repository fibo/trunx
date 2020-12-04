import * as React from 'react'
import { HelpersProps, MainColorsProps } from './modifiers'
export interface HeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps,
    MainColorsProps {
  isBold?: boolean
  isDark?: boolean
  isFullheightWithNavbar?: boolean
  isFullheight?: boolean
  isLarge?: boolean
  isLight?: boolean
  isMedium?: boolean
}
interface HeroBodyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
interface HeroFootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
interface HeroHeadProps
  extends React.HTMLAttributes<HTMLDivElement>,
    HelpersProps {}
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
