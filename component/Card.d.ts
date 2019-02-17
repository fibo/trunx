import * as React from "react";
import { IAnchorProps } from "./Anchor";
import { ITextColorHelpersProps } from "./modifiers";
import { IImageProps } from "./Image";
interface ICardContentProps extends ITextColorHelpersProps {
}
interface ICardFooterItemProps {
    download?: IAnchorProps["download"];
    href?: IAnchorProps["href"];
    onClick?: IAnchorProps["onClick"];
    target?: IAnchorProps["target"];
}
interface ICardFooterProps extends ITextColorHelpersProps {
}
interface ICardHeaderIconProps {
    download?: IAnchorProps["download"];
    href?: IAnchorProps["href"];
    onClick?: IAnchorProps["onClick"];
    target?: IAnchorProps["target"];
}
interface ICardHeaderTitleProps {
    isCentered?: boolean;
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
declare class CardHeader extends React.Component {
    static Icon: typeof CardHeaderIcon;
    static Title: typeof CardHeaderTitle;
    render(): JSX.Element;
}
declare class CardImage extends React.Component<IImageProps> {
    render(): JSX.Element;
}
export default class Card extends React.Component {
    static Content: typeof CardContent;
    static Footer: typeof CardFooter;
    static Header: typeof CardHeader;
    static Image: typeof CardImage;
    render(): JSX.Element;
}
export {};
