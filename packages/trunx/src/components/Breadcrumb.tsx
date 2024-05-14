import {FC, HTMLAttributes, LiHTMLAttributes, PropsWithChildren} from "react"
import {BoolClassArg, SizeArg, boolClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

type BreadcrumbSeparator = "arrow" | "bullet" | "dot" | "succedes"

export type BreadcrumbProps = HTMLAttributes<HTMLElement> &
  SizeArg &
  Pick<BoolClassArg, "isCentered" | "isRight"> &
  Partial<{
    separator: BreadcrumbSeparator
  }>

export const Breadcrumb: FC<PropsWithChildren<BreadcrumbProps>> = ({
  className,
  children,
  separator,
  isCentered,
  isRight,
  ...props
}) => (
  <nav
    className={classnames(
      "breadcrumb",
      boolClass({isCentered, isRight}),
      separator === undefined ? "" : `has-${separator}-separator`,
      className
    )}
    aria-label="breadcrumbs"
    {...props}
  >
    <ul>{children}</ul>
  </nav>
)

export type BreadcrumbItemProps = LiHTMLAttributes<HTMLLIElement> &
  Pick<BoolClassArg, "isActive">

export const BreadcrumbItem: FC<PropsWithChildren<BreadcrumbItemProps>> = ({
  className,
  children,
  isActive,
  ...props
}) => (
  <li className={classnames(boolClass({isActive}), className)} {...props}>
    {children}
  </li>
)
