import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IMainColorsProps, IShadeColorsProps, ISizeProps } from "./modifiers";
interface ITagProps extends IAnchorProps, IMainColorsProps, IShadeColorsProps, ISizeProps {
    isRounded?: boolean;
}
export default class Tag extends React.Component<ITagProps> {
    render(): JSX.Element;
}
export {};
