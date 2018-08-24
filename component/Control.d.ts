import * as React from "react";
interface IControlProps {
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
}
export default class Control extends React.Component<IControlProps> {
    render(): JSX.Element;
}
export {};
