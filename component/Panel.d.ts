import * as React from "react";
declare class PanelHeading extends React.Component {
    render(): JSX.Element;
}
declare class PanelIcon extends React.Component {
    render(): JSX.Element;
}
declare class PanelTabs extends React.Component {
    render(): JSX.Element;
}
export default class Panel extends React.Component {
    static Heading: typeof PanelHeading;
    static Icon: typeof PanelIcon;
    static Tabs: typeof PanelTabs;
    render(): JSX.Element;
}
export {};
