import * as React from "react";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface ISpanProps extends IBackgroundColorHelpersProps, ITextColorHelpersProps, React.HTMLAttributes<HTMLSpanElement> {
}
export default class Span extends React.Component<ISpanProps> {
    render(): JSX.Element;
}
export {};
