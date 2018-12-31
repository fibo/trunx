import * as React from "react";
import { ITextColorHelpersProps } from "./modifiers";
interface ILabelProps extends ITextColorHelpersProps {
}
export default class Label extends React.Component<ILabelProps> {
    render(): JSX.Element;
}
export {};
