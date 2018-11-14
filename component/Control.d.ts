import * as React from "react";
interface IControlProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLarge?: boolean;
    isLoading?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
}
export default class Control extends React.Component<IControlProps> {
    render(): JSX.Element;
}
export {};
