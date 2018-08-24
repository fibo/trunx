import * as React from "react";
interface IInputProps {
    isDanger?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
}
export default class Input extends React.Component<IInputProps> {
    render(): JSX.Element;
}
export {};
