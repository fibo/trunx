import * as React from "react";
interface IProgressProps {
    isDanger?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isLink?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    max: number;
    value: number;
}
export default class Progress extends React.Component<IProgressProps> {
    render(): JSX.Element;
}
export {};
