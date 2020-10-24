import * as React from 'react'
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
}
export declare type ModalBackgroundProps = React.HTMLAttributes<HTMLDivElement>
export declare type ModalCardProps = React.HTMLAttributes<HTMLDivElement>
export declare type ModalCardBodyProps = React.HTMLAttributes<HTMLElement>
export declare type ModalCardFootProps = React.HTMLAttributes<HTMLElement>
export declare type ModalCardHeadProps = React.HTMLAttributes<HTMLElement>
export declare type ModalCardTitleProps = React.HTMLAttributes<HTMLElement>
export interface ModalCloseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLarge?: boolean
}
export declare type ModalContentProps = React.HTMLAttributes<HTMLDivElement>
declare class ModalCardBody extends React.Component<ModalCardBodyProps> {
  render(): React.ReactNode
}
declare class ModalCardFoot extends React.Component<ModalCardFootProps> {
  render(): React.ReactNode
}
declare class ModalCardHead extends React.Component<ModalCardHeadProps> {
  render(): React.ReactNode
}
declare class ModalCardTitle extends React.Component<ModalCardTitleProps> {
  render(): React.ReactNode
}
declare class ModalBackground extends React.Component<ModalBackgroundProps> {
  render(): React.ReactNode
}
declare class ModalCard extends React.Component<ModalCardProps> {
  static Body: typeof ModalCardBody
  static Foot: typeof ModalCardFoot
  static Head: typeof ModalCardHead
  static Title: typeof ModalCardTitle
  render(): React.ReactNode
}
declare class ModalClose extends React.Component<ModalCloseProps> {
  static defaultProps: {
    'aria-label': string
  }
  render(): React.ReactNode
}
declare class ModalContent extends React.Component<ModalContentProps> {
  render(): React.ReactNode
}
export declare class Modal extends React.Component<ModalProps> {
  static Background: typeof ModalBackground
  static Card: typeof ModalCard
  static Close: typeof ModalClose
  static Content: typeof ModalContent
  render(): React.ReactNode
}
export {}
