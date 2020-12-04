import * as React from 'react'
import { HelpersProps } from './modifiers'
export interface PaginationProps
  extends React.HTMLAttributes<HTMLElement>,
    HelpersProps {}
export interface PaginationEllipsisProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    HelpersProps {}
export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {
  isCurrent?: boolean
}
export interface PaginationListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    HelpersProps {}
export interface IPaginationNextProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {}
export interface PaginationPreviousProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HelpersProps {}
declare class PaginationEllipsis extends React.Component<
  PaginationEllipsisProps
> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PaginationLink extends React.Component<PaginationLinkProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PaginationList extends React.Component<PaginationListProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PaginationNext extends React.Component<IPaginationNextProps> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
declare class PaginationPrevious extends React.Component<
  PaginationPreviousProps
> {
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
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
  static getDerivedStateFromError(): {
    hasError: boolean
  }
  state: {
    hasError: boolean
  }
  render(): React.ReactNode
}
export {}
