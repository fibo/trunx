import * as React from 'react'
interface IPanelProps {
    children?: React.ReactNode;
    className?: string;
}
interface IPanelBlockProps {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
}
interface IPanelHeadingProps {
    children?: React.ReactNode;
    className?: string;
}
interface IPanelIconProps {
    children?: React.ReactNode;
    className?: string;
}
interface IPanelTabsProps {
    children?: React.ReactNode;
    className?: string;
}
declare class PanelBlock extends React.Component<IPanelBlockProps> {
  render(): JSX.Element;
}
declare class PanelHeading extends React.Component<IPanelHeadingProps> {
  render(): JSX.Element;
}
declare class PanelIcon extends React.Component<IPanelIconProps> {
  render(): JSX.Element;
}
declare class PanelTabs extends React.Component<IPanelTabsProps> {
  render(): JSX.Element;
}
export default class Panel extends React.Component<IPanelProps> {
    static Block: typeof PanelBlock;
    static Heading: typeof PanelHeading;
    static Icon: typeof PanelIcon;
    static Tabs: typeof PanelTabs;
    render(): JSX.Element;
}
export {}
