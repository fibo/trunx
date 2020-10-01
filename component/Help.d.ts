import * as React from "react";
import { IMainColorsProps, ITextColorHelpersProps } from "./modifiers";
interface IHelpProps extends IMainColorsProps, ITextColorHelpersProps {
    children?: React.ReactNode;
    className?: string;
}
export default class Help extends React.Component<IHelpProps> {
    render(): JSX.Element;
}
export {};
