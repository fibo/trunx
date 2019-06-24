import * as React from "react";
import { ITextColorHelpersProps } from "./modifiers";
interface IBoxProps extends ITextColorHelpersProps, React.HTMLAttributes<HTMLDivElement> {
}
export default class Box extends React.Component<IBoxProps> {
    render(): JSX.Element;
}
export {};
