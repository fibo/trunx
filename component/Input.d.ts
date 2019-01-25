import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface IInputProps extends IMainColorsProps, ISizeProps, React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.RefObject<HTMLInputElement>;
    isFocused?: boolean;
    isHovered?: boolean;
    isRounded?: boolean;
    isStatic?: boolean;
}
export default class Input extends React.Component<IInputProps> {
    render(): JSX.Element;
}
export {};
