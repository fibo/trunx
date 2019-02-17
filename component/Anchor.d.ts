import * as React from "react";
export interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className: string;
}
export declare class Anchor extends React.Component<IAnchorProps> {
    render(): JSX.Element;
}
