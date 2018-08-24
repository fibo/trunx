import * as React from "react";
interface ITabsProps {
    isBoxed?: boolean;
    isCentered?: boolean;
    isFullwidth?: boolean;
    isLarge?: boolean;
    isMedium?: boolean;
    isRight?: boolean;
    isSmall?: boolean;
    isToggle?: boolean;
    isToggleRounded?: boolean;
}
interface ITabsItemProps {
    isActive?: boolean;
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
declare class TabsItem extends React.Component<ITabsItemProps> {
    static defaultProps: {
        onClick: Function;
    };
    render(): JSX.Element;
}
declare class TabsNav extends React.Component<ITabsProps> {
    render(): JSX.Element;
}
export default class Tabs extends React.Component<ITabsProps> {
    static Item: typeof TabsItem;
    static Nav: typeof TabsNav;
    render(): JSX.Element;
}
export {};
