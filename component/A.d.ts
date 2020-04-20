import * as React from "react";
import { IFloatHelpersProps } from "./modifiers";
interface IAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, IFloatHelpersProps {
    isActive?: boolean;
}
export default class A extends React.Component<IAProps> {
    render(): JSX.Element;
}
export {};
