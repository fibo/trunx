import * as React from "react";
interface IPaginationLinkProps {
    isCurrent?: boolean;
}
declare class PaginationEllipsis extends React.Component {
    render(): JSX.Element;
}
declare class PaginationLink extends React.Component<IPaginationLinkProps> {
    render(): JSX.Element;
}
declare class PaginationList extends React.Component {
    render(): JSX.Element;
}
declare class PaginationNext extends React.Component {
    render(): JSX.Element;
}
declare class PaginationPrevious extends React.Component {
    render(): JSX.Element;
}
export default class Pagination extends React.Component {
    static Ellipsis: typeof PaginationEllipsis;
    static Link: typeof PaginationLink;
    static List: typeof PaginationList;
    static Next: typeof PaginationNext;
    static Previous: typeof PaginationPrevious;
    render(): JSX.Element;
}
export {};
