import * as React from "react";
interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    isBordered?: boolean;
    isFullwidth?: boolean;
    isHoverable?: boolean;
    isNarrow?: boolean;
    isStriped?: boolean;
}
export default class Table extends React.Component<ITableProps> {
    render(): JSX.Element;
}
export {};
