import * as React from "react";
import { IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IParagraphProps extends IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps, React.HTMLAttributes<HTMLParagraphElement> {
}
export default class Span extends React.Component<IParagraphProps> {
    render(): JSX.Element;
}
export {};
