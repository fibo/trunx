import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
import { IImageProps } from "./Image";
interface ICardContentProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
}
interface ICardFooterItemProps {
    children?: React.ReactNode;
    className?: string;
    download?: IAnchorProps["download"];
    href?: IAnchorProps["href"];
    onClick?: IAnchorProps["onClick"];
    target?: IAnchorProps["target"];
}
interface ICardFooterProps extends ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
}
interface ICardHeader {
    children?: React.ReactNode;
    className?: string;
}
interface ICardHeaderIconProps {
    children?: React.ReactNode;
    className?: string;
    download?: IAnchorProps["download"];
    href?: IAnchorProps["href"];
    onClick?: IAnchorProps["onClick"];
    target?: IAnchorProps["target"];
}
interface ICardHeaderTitleProps {
    children?: React.ReactNode;
    className?: string;
    isCentered?: boolean;
}
interface ICardImageProps extends IImageProps {
    className?: string;
}
interface ICardProps extends IBackgroundColorHelpersProps, React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
declare class CardContent extends React.Component<ICardContentProps> {
    render(): JSX.Element;
}
declare class CardFooterItem extends React.Component<ICardFooterItemProps> {
    render(): JSX.Element;
}
declare class CardFooter extends React.Component<ICardFooterProps> {
    static Item: typeof CardFooterItem;
    render(): JSX.Element;
}
declare class CardHeaderIcon extends React.Component<ICardHeaderIconProps> {
    render(): JSX.Element;
}
declare class CardHeaderTitle extends React.Component<ICardHeaderTitleProps> {
    render(): JSX.Element;
}
declare class CardHeader extends React.Component<ICardHeader> {
    static Icon: typeof CardHeaderIcon;
    static Title: typeof CardHeaderTitle;
    render(): JSX.Element;
}
declare class CardImage extends React.Component<ICardImageProps> {
    render(): JSX.Element;
}
export default class Card extends React.Component<ICardProps> {
    static Content: typeof CardContent;
    static Footer: typeof CardFooter;
    static Header: typeof CardHeader;
    static Image: typeof CardImage;
    render(): JSX.Element;
}
export {};
