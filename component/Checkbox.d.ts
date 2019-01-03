import * as React from "react";
interface ICheckboxProps {
    disabled?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
}
export default class Checkbox extends React.Component<ICheckboxProps> {
    render(): JSX.Element;
}
export {};
