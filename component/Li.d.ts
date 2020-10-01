import * as React from "react";
interface ILiProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children?: React.ReactNode;
    className?: string;
    isActive?: boolean;
}
export default class Li extends React.Component<ILiProps> {
    render(): JSX.Element;
}
export {};
