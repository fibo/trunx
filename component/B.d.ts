import * as React from "react";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IBProps extends React.AnchorHTMLAttributes<HTMLElement>, IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class B extends React.Component<IBProps> {
    render(): JSX.Element;
}
export {};
