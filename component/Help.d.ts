import * as React from "react";
import { IMainColorsProps, ITextColorHelpersProps } from "./modifiers";
interface IHelpProps extends IMainColorsProps, ITextColorHelpersProps {
}
export default class Help extends React.Component<IHelpProps> {
    render(): JSX.Element;
}
export {};
