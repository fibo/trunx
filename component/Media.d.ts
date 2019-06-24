import * as React from "react";
interface IMediaProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare class MediaContent extends React.Component {
    render(): JSX.Element;
}
declare class MediaLeft extends React.Component {
    render(): JSX.Element;
}
declare class MediaRight extends React.Component {
    render(): JSX.Element;
}
export default class Media extends React.Component<IMediaProps> {
    static Content: typeof MediaContent;
    static Left: typeof MediaLeft;
    static Right: typeof MediaRight;
    render(): JSX.Element;
}
export {};
