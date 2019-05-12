import * as React from "react";
import { ISizeProps } from "./modifiers";
interface ITabsProps extends ISizeProps {
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
