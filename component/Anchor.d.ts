import * as React from "react";
interface IAnchorComponentProps {
}
export interface IAnchorProps {
    AnchorComponent: React.ComponentClass<IAnchorComponentProps>;
    className: string;
    href?: string;
    hrefProp: string;
}
export declare class Anchor extends React.Component<IAnchorProps> {
    static defaultProps: {
        hrefProp: string;
    };
    render(): JSX.Element;
}
export {};
