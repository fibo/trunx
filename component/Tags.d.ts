import * as React from "react";
interface ITagsProps extends React.HTMLAttributes<HTMLDivElement> {
    areLarge?: boolean;
    areMedium?: boolean;
    hasAddons?: boolean;
}
export default class Tags extends React.Component<ITagsProps> {
    render(): JSX.Element;
}
export {};
