import { FC, HTMLAttributes, LiHTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames(
    "breadcrumb",
    modifier({ isCentered, isRight }),
    separator === undefined ? "" : `has-${separator}-separator`,
    className
  )

  return (
    <nav className={_class} aria-label="breadcrumbs" {...props}>
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
  const _class = classNames(modifier({ isActive }), className)

  return (
    <li className={_class} {...props}>
      {children}
    </li>
  )
}
