import * as React from "react";
interface ILevelProps {
    isMobile?: boolean;
}
interface ILevelItemProps {
    hasTextCentered?: boolean;
}
declare class LevelItem extends React.Component<ILevelItemProps> {
    render(): JSX.Element;
}
declare class LevelLeft extends React.Component {
    render(): JSX.Element;
}
declare class LevelRight extends React.Component {
    render(): JSX.Element;
}
export default class Level extends React.Component<ILevelProps> {
    static Item: typeof LevelItem;
    static Left: typeof LevelLeft;
    static Right: typeof LevelRight;
    render(): JSX.Element;
}
export {};
