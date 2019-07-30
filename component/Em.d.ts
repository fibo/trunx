import * as React from "react";
import { IBackgroundColorHelpersProps, ITextColorHelpersProps } from "./modifiers";
interface IEmProps extends IBackgroundColorHelpersProps, ITextColorHelpersProps {
}
export default class Em extends React.Component<IEmProps> {
    render(): JSX.Element;
}
export {};
