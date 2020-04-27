import * as React from "react";
import { IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface PProps extends React.HTMLAttributes<HTMLParagraphElement>, IAlignementHelpersProps, IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class P extends React.Component<PProps> {
    render(): JSX.Element;
}
export {};
