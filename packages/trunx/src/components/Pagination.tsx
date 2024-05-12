import {
  FC,
  AnchorHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import { classnames } from "@trunx/classnames"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type PaginationProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp<"small" | "medium" | "large"> &
  Pick<BooleanModifierProps, "isCentered" | "isRight" | "isRounded">

export const Pagination: FC<PropsWithChildren<PaginationProps>> = ({
  className,
  children,
  isCentered,
  isRight,
  isRounded,
  size,
  ...props
}) => {
  return (
    <nav
      className={classnames(
        "pagination",
        sizeClassName(size),
        modifier({ isCentered, isRight, isRounded }),
        className
      )}
      aria-label="pagination"
      {...props}
    >
      <ul>{children}</ul>
    </nav>
  )
}

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
}) => {
  return (
    <li>
      <a
        className={classnames(
          "pagination-link",
          { "is-current": isCurrent },
          className
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}

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
    Pick<BooleanModifierProps, "isDisabled">

export const PaginationNext: FC<
  PropsWithChildren<PaginationIncrementalNavigationProps>
> = ({ children, className, isDisabled, ...props }) => {
  return (
    <a
      className={classnames(
        "pagination-next",
        modifier({ isDisabled }),
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export const PaginationPrevious: FC<
  PropsWithChildren<PaginationIncrementalNavigationProps>
> = ({ children, className, isDisabled, ...props }) => {
  return (
    <a
      className={classnames(
        "pagination-previous",
        modifier({ isDisabled }),
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
