import * as React from "react";
interface ITableProps extends React.TableHTMLAttributes<HTMLTableElement> {
    isBordered?: boolean;
    isFullwidth?: boolean;
    isHoverable?: boolean;
    isNarrow?: boolean;
    isStriped?: boolean;
}
declare class TableContainer extends React.Component {
    render(): JSX.Element;
}
export default class Table extends React.Component<ITableProps> {
    static Container: typeof TableContainer;
    render(): JSX.Element;
}
export {};
