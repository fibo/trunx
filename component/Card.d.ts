import * as React from 'react'
import { ImageProps } from './Image'
import { TextColorHelpersProps } from './modifiers'
export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextColorHelpersProps {}
export declare type CardFooterItemProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
>
export declare type CardFooterProps = React.HTMLAttributes<HTMLElement>
export declare type CardHeaderProps = React.HTMLAttributes<HTMLElement>
export declare type CardHeaderIconProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
>
export interface CardHeaderTitleProps
  extends React.HTMLAttributes<HTMLElement> {
  isCentered?: boolean
}
export declare type CardImageProps = ImageProps
export declare type CardProps = React.HTMLAttributes<HTMLDivElement>
declare class CardContent extends React.Component<CardContentProps> {
  render(): React.ReactNode
}
declare class CardFooterItem extends React.Component<CardFooterItemProps> {
  render(): React.ReactNode
}
declare class CardFooter extends React.Component<CardFooterProps> {
  static Item: typeof CardFooterItem
  render(): React.ReactNode
}
declare class CardHeaderIcon extends React.Component<CardHeaderIconProps> {
  render(): React.ReactNode
}
declare class CardHeaderTitle extends React.Component<CardHeaderTitleProps> {
  render(): React.ReactNode
}
declare class CardHeader extends React.Component<CardHeaderProps> {
  static Icon: typeof CardHeaderIcon
  static Title: typeof CardHeaderTitle
  render(): React.ReactNode
}
declare class CardImage extends React.Component<CardImageProps> {
  render(): React.ReactNode
}
export declare class Card extends React.Component<CardProps> {
  static Content: typeof CardContent
  static Footer: typeof CardFooter
  static Header: typeof CardHeader
  static Image: typeof CardImage
  render(): React.ReactNode
}
export {}
