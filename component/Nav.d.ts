import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IBreadcrumbProps {
    hasArrowSeparator?: boolean;
    hasBulletSeparator?: boolean;
    hasDotSeparator?: boolean;
    hasSuccedesSeparator?: boolean;
    isCentered?: boolean;
    isRight?: boolean;
}
interface INavProps extends IBreadcrumbProps, ISizeProps, React.HTMLAttributes<HTMLElement> {
    breadcrumb?: boolean;
}
export default class Nav extends React.Component<INavProps> {
    render(): JSX.Element;
}
export {};
