import * as React from "react";
import { ISizeProps } from "./modifiers";
interface IDeleteProps extends ISizeProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Delete extends React.Component<IDeleteProps> {
    render(): JSX.Element;
}
export {};
