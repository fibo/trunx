import * as React from "react";
import { ITextColorHelpersProps } from "./modifiers";
interface ILevelItemProps extends ITextColorHelpersProps {
    hasTextCentered?: boolean;
}
interface ILevelLeftProps extends ITextColorHelpersProps {
}
interface ILevelProps extends ITextColorHelpersProps {
    isMobile?: boolean;
}
interface ILevelRightProps extends ITextColorHelpersProps {
}
declare class LevelItem extends React.Component<ILevelItemProps> {
    render(): JSX.Element;
}
declare class LevelLeft extends React.Component<ILevelLeftProps> {
    render(): JSX.Element;
}
declare class LevelRight extends React.Component<ILevelRightProps> {
    render(): JSX.Element;
}
export default class Level extends React.Component<ILevelProps> {
    static Item: typeof LevelItem;
    static Left: typeof LevelLeft;
    static Right: typeof LevelRight;
    render(): JSX.Element;
}
export {};
