import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface IMessageProps extends IMainColorsProps, ISizeProps {
    isDark?: boolean;
    isLink?: boolean;
}
declare class MessageBody extends React.Component {
    render(): JSX.Element;
}
declare class MessageHeader extends React.Component {
    render(): JSX.Element;
}
export default class Message extends React.Component<IMessageProps> {
    static Body: typeof MessageBody;
    static Header: typeof MessageHeader;
    render(): JSX.Element;
}
export {};
