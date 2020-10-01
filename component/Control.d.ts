import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IControlProps extends ISizeProps {
    children?: React.ReactNode;
    className?: string;
    hasIconsLeft?: boolean;
    hasIconsRight?: boolean;
    isExpanded?: boolean;
    isLoading?: boolean;
}
export default class Control extends React.Component<IControlProps> {
    render(): JSX.Element;
}
export {};
