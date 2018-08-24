import * as React from "react";
interface IContainerProps {
    isFluid?: boolean;
    isFullhd?: boolean;
    isWidescreen?: boolean;
}
export default class Container extends React.Component<IContainerProps> {
    render(): JSX.Element;
}
export {};
