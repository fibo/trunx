import {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import {BoolClassArg, boolClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type DropdownClassArg = Pick<BoolClassArg, "isActive" | "isHoverable" | "isRight" | "isUp">

export type DropdownProps = HTMLAttributes<HTMLDivElement> & DropdownClassArg

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  children,
  className,
  isHoverable,
  isActive,
  isRight,
  isUp,
  ...props
}) => (
  <div
    className={classnames(
      "dropdown",
      boolClass({isActive, isHoverable, isRight, isUp}),
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export const DropdownDivider: FC = () => <hr className="dropdown-divider" />

type DropdownItemClassArg = Pick<BoolClassArg, "isActive">

const dropdownItemClass = (
  {isActive}: DropdownItemClassArg,
) => classnames("dropdown-item", boolClass({isActive}))

export type DropdownItemProps = HTMLAttributes<HTMLDivElement> &
  DropdownItemClassArg

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  isActive,
  ...props
}) => (
  <div className={
    classnames(dropdownItemClass({isActive}), className)
  } {...props}>
    {children}
  </div>
)

export type DropdownItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  DropdownItemClassArg

export const DropdownItemAnchor: FC<DropdownItemAnchorProps> = ({
  children,
  className,
  isActive,
  ...props
}) => (
  <a className={
    classnames(dropdownItemClass({isActive}), className)
  } {...props}>
    {children}
  </a>
)

export type DropdownMenuProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "className"
>

export const DropdownMenu: FC<PropsWithChildren<DropdownMenuProps>> = ({
  children,
  ...props
}) => (
  <div className="dropdown-menu" {...props}>
    <div className="dropdown-content">{children}</div>
  </div>
)

export type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>

export const DropdownTrigger: FC<PropsWithChildren<DropdownTriggerProps>> = ({
  children,
  className,
  ...props
}) => (
  <div className="dropdown-trigger">
    <button className={classnames("button", className)} {...props}>
      {children}
    </button>
  </div>
)
