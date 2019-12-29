import * as React from "react";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IBoxProps extends IBackgroundColorHelpersProps, ITextColorHelpersProps, React.HTMLAttributes<HTMLDivElement> {
}
export default class Box extends React.Component<IBoxProps> {
    render(): JSX.Element;
}
export {};
