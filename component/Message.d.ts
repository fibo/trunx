import * as React from 'react'
import {
  HelpersProps,
  MainColorsProps,
  ShadeColorsProps,
  SizeProps,
} from './modifiers'
interface MessageProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps {
  isDark?: boolean
}
export declare type MessageBodyProps = React.HTMLAttributes<HTMLDivElement>
export declare type MessageHeaderProps = React.HTMLAttributes<HTMLDivElement>
declare class MessageBody extends React.Component<MessageBodyProps> {
  render(): React.ReactNode
}
declare class MessageHeader extends React.Component<MessageHeaderProps> {
  render(): React.ReactNode
}
export declare class Message extends React.Component<MessageProps> {
  static Body: typeof MessageBody
  static Header: typeof MessageHeader
  render(): React.ReactNode
}
export {}
