import * as React from "react";
export interface IAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className: string;
}
export declare function Anchor({ children, className, ...props }: IAnchorProps): JSX.Element;
