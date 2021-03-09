import * as React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundary'
import { HelpersProps } from './modifiers'
export interface MediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export interface MediaContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export interface MediaLeftProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}
export interface MediaRightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ErrorBoundaryProps,
    HelpersProps {}
declare class MediaContent extends React.Component<MediaContentProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class MediaLeft extends React.Component<MediaLeftProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class MediaRight extends React.Component<MediaRightProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Media extends React.Component<MediaProps> {
  static Content: typeof MediaContent
  static Left: typeof MediaLeft
  static Right: typeof MediaRight
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
