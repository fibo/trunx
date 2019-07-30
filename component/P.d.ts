import * as React from "react";
import { IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IPProps extends IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps, React.HTMLAttributes<HTMLParagraphElement> {
}
export default class P extends React.Component<IPProps> {
    render(): JSX.Element;
}
export {};
