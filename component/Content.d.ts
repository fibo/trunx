import * as React from "react";
interface IContentProps {
    hasTextCentered?: boolean;
    hasTextJustified?: boolean;
    hasTextLeft?: boolean;
    hasTextRight?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
}
export default class Content extends React.Component<IContentProps> {
    render(): JSX.Element;
}
export {};
