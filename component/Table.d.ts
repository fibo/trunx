import * as React from "react";
interface ITableProps {
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
