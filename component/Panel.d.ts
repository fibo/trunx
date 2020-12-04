import * as React from 'react'
export declare type PanelProps = React.HTMLAttributes<HTMLElement>
export interface PanelBlockProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}
export declare type PanelHeadingProps = React.HTMLAttributes<
  HTMLParagraphElement
>
export declare type PanelIconProps = React.HTMLAttributes<HTMLSpanElement>
export declare type PanelTabsProps = React.HTMLAttributes<HTMLParagraphElement>
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
