import * as React from "react";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface ISmallProps extends React.HTMLAttributes<HTMLElement>, IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class Small extends React.Component<ISmallProps> {
    render(): JSX.Element;
}
export {};
