import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface ITagProps extends IAnchorProps, IMainColorsProps, ISizeProps {
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
