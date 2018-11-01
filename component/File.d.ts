import * as React from "react";
interface IFileProps {
    hasName?: boolean;
    isBoxed?: boolean;
    isFullwidth?: boolean;
    isRight?: boolean;
}
declare class FileCta extends React.Component {
    render(): JSX.Element;
}
declare class FileIcon extends React.Component {
    render(): JSX.Element;
}
declare class FileLabel extends React.Component {
    render(): JSX.Element;
}
export default class File extends React.Component<IFileProps> {
    static Cta: typeof FileCta;
    static Icon: typeof FileIcon;
    static Label: typeof FileLabel;
    render(): JSX.Element;
}
export {};
