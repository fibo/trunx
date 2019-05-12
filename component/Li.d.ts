import * as React from "react";
interface ILiProps extends React.LiHTMLAttributes<HTMLLIElement> {
    isActive?: boolean;
}
export default class Li extends React.Component<ILiProps> {
    render(): JSX.Element;
}
export {};
