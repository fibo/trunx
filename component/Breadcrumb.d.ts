import * as React from "react";
import { ISizeProps, ITextColorHelpersProps } from "./modifiers";
interface IBreadcrumbProps extends ISizeProps, ITextColorHelpersProps {
    hasArrowSeparator?: boolean;
    hasBulletSeparator?: boolean;
    hasDotSeparator?: boolean;
    hasSuccedesSeparator?: boolean;
    isCentered?: boolean;
    isRight?: boolean;
}
export default class Breadcrumb extends React.Component<IBreadcrumbProps> {
    render(): JSX.Element;
}
export {};
