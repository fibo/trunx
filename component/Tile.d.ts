import * as React from 'react'
import { MainColorsProps } from './modifiers'
export interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
  is7?: boolean
  is8?: boolean
  is9?: boolean
  is10?: boolean
  is11?: boolean
  is12?: boolean
  isParent?: boolean
  isVertical?: boolean
}
export declare type TileAncestorProps = React.HTMLAttributes<HTMLDivElement>
export declare type TileChildProps = React.HTMLAttributes<HTMLDivElement>
export declare type TileChildBoxProps = React.HTMLAttributes<HTMLDivElement>
export interface TileChildNotificationProps
  extends React.HTMLAttributes<HTMLElement>,
    MainColorsProps {}
declare class TileAncestor extends React.Component<TileAncestorProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class TileChildBox extends React.Component<TileChildBoxProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class TileChildNotification extends React.Component<
  TileChildNotificationProps
> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class TileChild extends React.Component<TileChildProps> {
  static Box: typeof TileChildBox
  static Notification: typeof TileChildNotification
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export declare class Tile extends React.Component<TileProps> {
  static Ancestor: typeof TileAncestor
  static Child: typeof TileChild
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
