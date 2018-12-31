import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IProgressProps extends ISizeProps {
    max: number;
    value: number;
}
export default class Progress extends React.Component<IProgressProps> {
    render(): JSX.Element;
}
export {};
