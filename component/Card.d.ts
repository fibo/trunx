import * as React from "react";
interface ICardFooterItemProps {
    href?: string;
}
interface ICardHeaderIconProps {
    href?: string;
}
interface ICardHeaderTitleProps {
    isCentered?: boolean;
}
declare class CardContent extends React.Component {
    render(): JSX.Element;
}
declare class CardFooterItem extends React.Component<ICardFooterItemProps> {
    render(): JSX.Element;
}
declare class CardFooter extends React.Component {
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
declare class CardImage extends React.Component {
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
