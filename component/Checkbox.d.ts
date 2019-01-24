import * as React from "react";
interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputRef?: React.RefObject<HTMLInputElement>;
}
export default class Checkbox extends React.Component<ICheckboxProps> {
    render(): JSX.Element;
}
export {};
