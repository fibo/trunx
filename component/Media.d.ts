import * as React from 'react'
export declare type MediaProps = React.HTMLAttributes<HTMLDivElement>
export declare type MediaContentProps = React.HTMLAttributes<HTMLDivElement>
export declare type MediaLeftProps = React.HTMLAttributes<HTMLDivElement>
export declare type MediaRightProps = React.HTMLAttributes<HTMLDivElement>
declare class MediaContent extends React.Component<MediaContentProps> {
  render(): React.ReactNode
}
declare class MediaLeft extends React.Component<MediaLeftProps> {
  render(): React.ReactNode
}
declare class MediaRight extends React.Component<MediaRightProps> {
  render(): React.ReactNode
}
export declare class Media extends React.Component<MediaProps> {
  static Content: typeof MediaContent
  static Left: typeof MediaLeft
  static Right: typeof MediaRight
  render(): React.ReactNode
}
export {}
