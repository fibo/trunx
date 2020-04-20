import * as React from "react";
import { IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface PProps extends IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps, React.HTMLAttributes<HTMLParagraphElement> {
}
export default class P extends React.Component<PProps> {
    render(): JSX.Element;
}
export {};
