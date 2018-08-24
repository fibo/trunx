import * as React from "react";
interface IIconProps {
    hasTextDanger?: boolean;
    hasTextInfo?: boolean;
    hasTextSuccess?: boolean;
    hasTextWarning?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
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
