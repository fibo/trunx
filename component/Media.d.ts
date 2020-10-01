import * as React from "react";
interface IMediaProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
}
interface IMediaContentProps {
    children?: React.ReactNode;
    className?: string;
}
interface IMediaLeftProps {
    children?: React.ReactNode;
    className?: string;
}
interface IMediaRightProps {
    children?: React.ReactNode;
    className?: string;
}
declare class MediaContent extends React.Component<IMediaContentProps> {
    render(): JSX.Element;
}
declare class MediaLeft extends React.Component<IMediaLeftProps> {
    render(): JSX.Element;
}
declare class MediaRight extends React.Component<IMediaRightProps> {
    render(): JSX.Element;
}
export default class Media extends React.Component<IMediaProps> {
    static Content: typeof MediaContent;
    static Left: typeof MediaLeft;
    static Right: typeof MediaRight;
    render(): JSX.Element;
}
export {};
