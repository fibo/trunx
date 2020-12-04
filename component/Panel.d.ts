import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface PanelProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export interface PanelBlockProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isActive?: boolean
}
export interface PanelHeadingProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}
export interface PanelIconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}
export interface PanelTabsProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    HelpersProps {}
declare class PanelBlock extends React.Component<PanelBlockProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PanelHeading extends React.Component<PanelHeadingProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PanelIcon extends React.Component<PanelIconProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PanelTabs extends React.Component<PanelTabsProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Panel extends React.Component<PanelProps> {
  static Block: typeof PanelBlock
  static Heading: typeof PanelHeading
  static Icon: typeof PanelIcon
  static Tabs: typeof PanelTabs
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
