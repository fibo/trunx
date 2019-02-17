import * as React from "react";
import { IMainColorsProps, IShadeColorsProps, ISizeProps } from "./modifiers";
interface IProgressProps extends IMainColorsProps, IShadeColorsProps, ISizeProps, React.ProgressHTMLAttributes<HTMLProgressElement> {
}
export default class Progress extends React.Component<IProgressProps> {
    render(): JSX.Element;
}
export {};
