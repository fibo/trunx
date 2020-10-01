import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IMainColorsProps, IShadeColorsProps, ISizeProps } from "./modifiers";
interface ITagProps extends IMainColorsProps, IShadeColorsProps, Pick<ISizeProps, "isMedium" | "isLarge"> {
    children?: React.ReactNode;
    className?: string;
    href?: IAnchorProps["href"];
    isDelete?: boolean;
    isNormal?: boolean;
    isRounded?: boolean;
    onClick?: IAnchorProps["onClick"];
    target?: IAnchorProps["target"];
}
export default class Tag extends React.Component<ITagProps> {
    render(): JSX.Element;
}
export {};
