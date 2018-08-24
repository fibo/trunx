import * as React from "react";
interface INotificationProps {
    isDanger?: boolean;
    isLink?: boolean;
    isInfo?: boolean;
    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export default class Notification extends React.Component<INotificationProps> {
    render(): JSX.Element;
}
export {};
