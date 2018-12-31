import * as React from "react";
import { IMainColorsProps, ISizeProps, ITextColorHelpersProps } from "./modifiers";
interface ITextareaProps extends IMainColorsProps, ISizeProps, ITextColorHelpersProps {
    isFocused?: boolean;
    isHovered?: boolean;
    placeholder?: string;
    rows?: number;
}
export default class Textarea extends React.Component<ITextareaProps> {
    render(): JSX.Element;
}
export {};
