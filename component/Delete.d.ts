import * as React from "react";
interface IDeleteProps {
    isLarge?: boolean;
    isMedium?: boolean;
    isSmall?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Delete extends React.Component<IDeleteProps> {
    render(): JSX.Element;
}
export {};
