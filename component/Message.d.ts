import * as React from "react";
interface IMessageProps {
    isDanger?: boolean;
    isDark?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isLink?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
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
