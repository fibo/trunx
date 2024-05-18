import {
  FC,
  AnchorHTMLAttributes,
  HTMLAttributes,
  TableHTMLAttributes,
  PropsWithChildren,
} from "react"
import {
  PaginationClassArg,
  PaginationLinkClassArg,
  PaginationIncrementalNavigationClassArg,
  TableClassArg,
  paginationClass,
  paginationLinkClass,
  paginationIncrementalNavigationClass,
  tableClass,
} from "@trunx/bulma"

export type TableProps = Omit<
  TableHTMLAttributes<HTMLTableElement>,
  "className"
> &
  TableClassArg

export const Table: FC<PropsWithChildren<TableProps>> = ({
  isHoverable,
  isFullwidth,
  isNarrow,
  isBordered,
  isStriped,
  children,
  ...props
}) => (
  <div className="table-container">
    <table
      className={tableClass({
        isBordered,
        isFullwidth,
        isHoverable,
        isNarrow,
        isStriped,
      })}
      {...props}
    >
      {children}
    </table>
  </div>
)

export type PaginationProps = Omit<HTMLAttributes<HTMLElement>, "className"> &
  PaginationClassArg

export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({
  isCentered,
  isRight,
  isRounded,
  size,
  children,
  ...props
}) => (
  <nav
    className={paginationClass({ isCentered, isRight, isRounded, size })}
    aria-label="pagination"
    {...props}
  >
    <ul>{children}</ul>
  </nav>
)

export const PaginationEllipsis: FC = () => (
  <li>
    <span className="pagination-ellipsis">&hellip;</span>
  </li>
)

export type PaginationLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "className"
> &
  PaginationLinkClassArg

export const PaginationLink: FC<PropsWithChildren<PaginationLinkProps>> = ({
  children,
  isCurrent,
  ...props
}) => (
  <li>
    <a className={paginationLinkClass({ isCurrent })} {...props}>
      {children}
    </a>
  </li>
)

export type PaginationListProps = Omit<
  HTMLAttributes<HTMLUListElement>,
  "className"
>

export const PaginationList: FC<PropsWithChildren<PaginationListProps>> = ({
  children,
  ...props
}) => (
  <ul className="pagination-list" {...props}>
    {children}
  </ul>
)

export type PaginationIncrementalNavigationProps =
  AnchorHTMLAttributes<HTMLAnchorElement> &
    PaginationIncrementalNavigationClassArg

export const PaginationIncrementalNavigation: FC<
  PropsWithChildren<PaginationIncrementalNavigationProps>
> = ({ direction, isDisabled, children, ...props }) => (
  <a
    className={paginationIncrementalNavigationClass({ direction, isDisabled })}
    {...props}
  >
    {children}
  </a>
)
