import * as React from "react";
import { ITextColorHelpersProps } from "./modifiers";
interface IStrongProps extends ITextColorHelpersProps {
}
export default class Strong extends React.Component<IStrongProps> {
    render(): JSX.Element;
}
export {};
