import * as React from "react";
import { IAlignementHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface ILevelItemProps extends React.HTMLAttributes<HTMLDivElement>, IAlignementHelpersProps, ITextColorHelpersProps {
    tag?: 'a' | 'div';
}
interface ILevelLeftProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
}
interface ILevelProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
    isMobile?: boolean;
}
interface ILevelRightProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
}
declare class LevelItem extends React.Component<ILevelItemProps> {
    render(): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
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
