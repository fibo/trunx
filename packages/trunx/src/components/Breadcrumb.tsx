import { FC, HTMLAttributes, LiHTMLAttributes, PropsWithChildren } from "react"
import { classnames } from "@trunx/classnames"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
} from "../modifiers/index.js"

type BreadcrumbSeparator = "arrow" | "bullet" | "dot" | "succedes"

export type BreadcrumbProps = HTMLAttributes<HTMLElement> &
  SizeModifierProp &
  Pick<BooleanModifierProps, "isCentered" | "isRight"> &
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
}) => {
  return (
    <nav
      className={classnames(
        "breadcrumb",
        modifier({ isCentered, isRight }),
        separator === undefined ? "" : `has-${separator}-separator`,
        className
      )}
      aria-label="breadcrumbs"
      {...props}
    >
      <ul>{children}</ul>
    </nav>
  )
}

export type BreadcrumbItemProps = LiHTMLAttributes<HTMLLIElement> &
  Pick<BooleanModifierProps, "isActive">

export const BreadcrumbItem: FC<PropsWithChildren<BreadcrumbItemProps>> = ({
  className,
  children,
  isActive,
  ...props
}) => {
  return (
    <li className={classnames(modifier({ isActive }), className)} {...props}>
      {children}
    </li>
  )
}
