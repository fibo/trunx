import * as React from "react";
interface IInputProps {
    disabled?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
    isDanger?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    isInfo?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isPrimary?: boolean;
    isRounded?: boolean;
    isSmall?: boolean;
    isStatic?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
    readOnly?: boolean;
    type?: "email" | "password" | "tel" | "text";
}
export default class Input extends React.Component<IInputProps> {
    render(): JSX.Element;
}
export {};
