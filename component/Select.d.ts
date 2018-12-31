import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface ISelectProps extends IMainColorsProps, ISizeProps {
    isFocused?: boolean;
    isHovered?: boolean;
    isLoading?: boolean;
    isMultiple?: boolean;
    size?: number;
}
export default class Select extends React.Component<ISelectProps> {
    render(): JSX.Element;
}
export {};
