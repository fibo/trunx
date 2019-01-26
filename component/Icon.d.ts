import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IIconProps extends ISizeProps {
    hasTextDanger?: boolean;
    hasTextInfo?: boolean;
    hasTextSuccess?: boolean;
    hasTextWarning?: boolean;
    isLeft?: boolean;
    isRight?: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}
interface IIconSvgProps {
    icon: {
        d: string;
        viewBox: string;
    };
    size: string;
}
declare class IconSvg extends React.Component<IIconSvgProps> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
export default class Icon extends React.Component<IIconProps> {
    static Svg: typeof IconSvg;
    render(): JSX.Element;
}
export {};
