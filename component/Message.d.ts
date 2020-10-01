import * as React from "react";
import { IHelpersProps, IMainColorsProps, ISizeProps } from "./modifiers";
interface IMessageProps extends IHelpersProps, IMainColorsProps, ISizeProps {
    children?: React.ReactNode;
    className?: string;
    isDark?: boolean;
}
interface IMessageBodyProps {
    children?: React.ReactNode;
    className?: string;
}
interface IMessageHeaderProps {
    children?: React.ReactNode;
    className?: string;
}
declare class MessageBody extends React.Component<IMessageBodyProps> {
    render(): JSX.Element;
}
declare class MessageHeader extends React.Component<IMessageHeaderProps> {
    render(): JSX.Element;
}
export default class Message extends React.Component<IMessageProps> {
    static Body: typeof MessageBody;
    static Header: typeof MessageHeader;
    render(): JSX.Element;
}
export {};
