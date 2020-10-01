import * as React from "react";
import { IBackgroundColorHelpersProps, ISizeProps, ITextColorHelpersProps } from "./modifiers";
interface IIconProps extends IBackgroundColorHelpersProps, ITextColorHelpersProps, ISizeProps {
    children?: React.ReactNode;
    className?: string;
    isLeft?: boolean;
    isRight?: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}
interface IIconSvgProps {
    className?: string;
    fill?: string;
    icon?: {
        d: string;
        viewBox: string;
    };
    size?: string;
}
declare class IconSvg extends React.Component<IIconSvgProps> {
    static defaultProps: {
        fill: string;
        size: string;
        icon: {
            d: string;
            viewBox: string;
        };
    };
    render(): JSX.Element;
}
export default class Icon extends React.Component<IIconProps> {
    static Svg: typeof IconSvg;
    render(): JSX.Element;
}
export {};
