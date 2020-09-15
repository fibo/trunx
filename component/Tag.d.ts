import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IMainColorsProps, IShadeColorsProps} from "./modifiers";
interface ITagProps extends IMainColorsProps, IShadeColorsProps {
    href?: IAnchorProps["href"];
    isDelete?: boolean;
    isNormal?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isRounded?: boolean;
    onClick?: IAnchorProps["onClick"];
    target?: IAnchorProps["target"];
}
export default class Tag extends React.Component<ITagProps> {
    render(): JSX.Element;
}
export {};
