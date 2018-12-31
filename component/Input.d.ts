import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface IInputProps extends IMainColorsProps, ISizeProps {
    disabled?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
    isFocused?: boolean;
    isHovered?: boolean;
    isRounded?: boolean;
    isStatic?: boolean;
    readOnly?: boolean;
    type?: "email" | "password" | "tel" | "text";
}
export default class Input extends React.Component<IInputProps> {
    render(): JSX.Element;
}
export {};
