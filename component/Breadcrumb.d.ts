import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IBreadcrumbProps extends React.HTMLAttributes<HTMLElement>, ISizeProps {
    hasArrowSeparator?: boolean;
    hasBulletSeparator?: boolean;
    hasDotSeparator?: boolean;
    hasSuccedesSeparator?: boolean;
    isCentered?: boolean;
    isRight?: boolean;
}
interface IBreadcrumbItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    isActive?: boolean;
}
declare class BreadcrumbItem extends React.Component<IBreadcrumbItemProps> {
    render(): JSX.Element;
}
export default class Breadcrumb extends React.Component<IBreadcrumbProps> {
    static Item: typeof BreadcrumbItem;
    render(): JSX.Element;
}
export {};
