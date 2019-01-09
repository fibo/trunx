import * as React from "react";
import { IHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IButtonsProps extends IHelpersProps, ITextColorHelpersProps {
}
export default class Buttons extends React.Component<IButtonsProps> {
    render(): JSX.Element;
}
export {};
