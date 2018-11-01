import * as React from "react";
interface IRadioProps {
    checked?: boolean;
    disabled?: boolean;
    name: string;
}
export default class Radio extends React.Component<IRadioProps> {
    render(): JSX.Element;
}
export {};
