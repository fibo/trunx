import * as React from "react";
interface IAnchorComponentProps {
}
interface IAnchorHTMLAttributes {
    download?: any;
    href?: string;
    hrefLang?: string;
    media?: string;
    rel?: string;
    target?: string;
    type?: string;
}
export interface IAnchorProps extends IAnchorHTMLAttributes {
    AnchorComponent?: React.ComponentClass<IAnchorComponentProps>;
    className?: string;
    hrefProp?: string;
}
export declare class Anchor extends React.Component<IAnchorProps> {
    static defaultProps: {
        hrefProp: string;
    };
    render(): JSX.Element;
}
export {};
