import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IDeleteProps extends ISizeProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default class Delete extends React.Component<IDeleteProps> {
    render(): JSX.Element;
}
export {};
