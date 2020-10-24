import * as React from 'react'
export declare type PaginationProps = React.HTMLAttributes<HTMLElement>
export declare type PaginationEllipsisProps = React.HTMLAttributes<
  HTMLSpanElement
>
export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isCurrent?: boolean
}
export declare type PaginationListProps = React.HTMLAttributes<HTMLUListElement>
export declare type IPaginationNextProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
>
export declare type PaginationPreviousProps = React.AnchorHTMLAttributes<
  HTMLAnchorElement
>
declare class PaginationEllipsis extends React.Component<
  PaginationEllipsisProps
> {
  render(): React.ReactNode
}
declare class PaginationLink extends React.Component<PaginationLinkProps> {
  render(): React.ReactNode
}
declare class PaginationList extends React.Component<PaginationListProps> {
  render(): React.ReactNode
}
declare class PaginationNext extends React.Component<IPaginationNextProps> {
  render(): React.ReactNode
}
declare class PaginationPrevious extends React.Component<
  PaginationPreviousProps
> {
  render(): React.ReactNode
}
export declare class Pagination extends React.Component<PaginationProps> {
  static defaultProps: {
    'aria-label': string
    role: string
  }
  static Ellipsis: typeof PaginationEllipsis
  static Link: typeof PaginationLink
  static List: typeof PaginationList
  static Next: typeof PaginationNext
  static Previous: typeof PaginationPrevious
  render(): React.ReactNode
}
export {}
