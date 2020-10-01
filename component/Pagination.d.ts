import * as React from "react";
interface IPaginationProps {
    children?: React.ReactNode;
    className?: string;
}
interface IPaginationEllipsisProps {
    className?: string;
}
interface IPaginationLinkProps {
    children?: React.ReactNode;
    className?: string;
    isCurrent?: boolean;
}
interface IPaginationListProps {
    children?: React.ReactNode;
    className?: string;
}
interface IPaginationNextProps {
    children?: React.ReactNode;
    className?: string;
}
interface IPaginationPreviousProps {
    children?: React.ReactNode;
    className?: string;
}
declare class PaginationEllipsis extends React.Component<IPaginationEllipsisProps> {
    render(): JSX.Element;
}
declare class PaginationLink extends React.Component<IPaginationLinkProps> {
    render(): JSX.Element;
}
declare class PaginationList extends React.Component<IPaginationListProps> {
    render(): JSX.Element;
}
declare class PaginationNext extends React.Component<IPaginationNextProps> {
    render(): JSX.Element;
}
declare class PaginationPrevious extends React.Component<IPaginationPreviousProps> {
    render(): JSX.Element;
}
export default class Pagination extends React.Component<IPaginationProps> {
    static Ellipsis: typeof PaginationEllipsis;
    static Link: typeof PaginationLink;
    static List: typeof PaginationList;
    static Next: typeof PaginationNext;
    static Previous: typeof PaginationPrevious;
    render(): JSX.Element;
}
export {};
