import {
  FC,
  AnchorHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import {BoolClassArg, boolClass, SizeArg, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type PaginationProps = HTMLAttributes<HTMLElement> &
  SizeArg<"small" | "medium" | "large"> &
  Pick<BoolClassArg, "isCentered" | "isRight" | "isRounded">

export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({
  className,
  children,
  isCentered,
  isRight,
  isRounded,
  size,
  ...props
}) => (
  <nav
    className={classnames(
      "pagination",
      sizeClass(size),
      boolClass({isCentered, isRight, isRounded}),
      className
    )}
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

export type PaginationLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  Partial<{
    isCurrent: boolean
  }>

export const PaginationLink: FC<PropsWithChildren<PaginationLinkProps>> = ({
  children,
  className,
  isCurrent,
  ...props
}) => (
  <li>
    <a
      className={classnames(
        "pagination-link",
        {"is-current": isCurrent},
        className
      )}
      {...props}
    >
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
  Pick<BoolClassArg, "isDisabled">

export const PaginationNext: FC<
  PropsWithChildren<PaginationIncrementalNavigationProps>
> = ({children, className, isDisabled, ...props}) => (
  <a
    className={classnames(
      "pagination-next",
      boolClass({isDisabled}),
      className
    )}
    {...props}
  >
    {children}
  </a>
)

export const PaginationPrevious: FC<
  PropsWithChildren<PaginationIncrementalNavigationProps>
> = ({children, className, isDisabled, ...props}) => (
  <a
    className={classnames(
      "pagination-previous",
      boolClass({isDisabled}),
      className
    )}
    {...props}
  >
    {children}
  </a>
)
