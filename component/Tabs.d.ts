import * as React from "react";
import { ISizeProps } from "./modifiers";
interface ITabsProps extends ISizeProps {
    children?: React.ReactNode;
    className?: string;
    isBoxed?: boolean;
    isCentered?: boolean;
    isFullwidth?: boolean;
    isRight?: boolean;
    isToggle?: boolean;
    isToggleRounded?: boolean;
}
export default class Tabs extends React.Component<ITabsProps> {
    render(): JSX.Element;
}
export {};
