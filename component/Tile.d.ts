import * as React from "react";
interface ITileProps {
    is1?: boolean;
    is2?: boolean;
    is3?: boolean;
    is4?: boolean;
    is5?: boolean;
    is6?: boolean;
    is7?: boolean;
    is8?: boolean;
    is9?: boolean;
    is10?: boolean;
    is11?: boolean;
    is12?: boolean;
    isParent?: boolean;
    isVertical?: boolean;
}
interface ITileChildNotificationProps {
    isDanger?: boolean;
    isLink?: boolean;
    isInfo?: boolean;
    isPrimary?: boolean;
    isSuccess?: boolean;
    isWarning?: boolean;
}
declare class TileAncestor extends React.Component {
    render(): JSX.Element;
}
declare class TileChildBox extends React.Component {
    render(): JSX.Element;
}
declare class TileChildNotification extends React.Component<ITileChildNotificationProps> {
    render(): JSX.Element;
}
declare class TileChild extends React.Component {
    static Box: typeof TileChildBox;
    static Notification: typeof TileChildNotification;
    render(): JSX.Element;
}
export default class Tile extends React.Component<ITileProps> {
    static Ancestor: typeof TileAncestor;
    static Child: typeof TileChild;
    render(): JSX.Element;
}
export {};
