import * as React from "react";
import { IMainColorsProps, ISizeProps } from "./modifiers";
interface IProgressProps extends IMainColorsProps, ISizeProps {
    max: number;
    value: number;
}
export default class Progress extends React.Component<IProgressProps> {
    render(): JSX.Element;
}
export {};
