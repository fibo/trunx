import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface ITagProps extends IMainColorsProps, ISizeProps {
    href?: string;
    isBlack?: boolean;
    isDark?: boolean;
    isLight?: boolean;
    isLink?: boolean;
    isRounded?: boolean;
    isWhite?: boolean;
}
export default class Tag extends React.Component<ITagProps> {
    render(): JSX.Element;
}
export {};
