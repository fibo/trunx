import * as React from "react";
interface IInputProps {
    inputRef?: React.RefObject<HTMLInputElement>;
    isDanger?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isSmall?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    type?: "email" | "password" | "tel" | "text";
}
export default class Input extends React.Component<IInputProps> {
    render(): JSX.Element;
}
export {};
