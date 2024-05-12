import {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from "react"
import { classnames } from "@trunx/classnames"
import { BooleanModifierProps, modifier } from "../modifiers/index.js"

export type DropdownProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, "isActive" | "isHoverable" | "isRight" | "isUp">

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  children,
  className,
  isHoverable,
  isActive,
  isRight,
  isUp,
  ...props
}) => {
  return (
    <div
      className={classnames(
        "dropdown",
        modifier({ isActive, isHoverable, isRight, isUp }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const DropdownDivider: FC = () => <hr className="dropdown-divider" />

type DropdownItemModifierProps = Pick<BooleanModifierProps, "isActive">

const dropdownItemClassNames = (
  { isActive }: DropdownItemModifierProps,
  className?: string
) => classnames("dropdown-item", modifier({ isActive }), className)

export type DropdownItemProps = HTMLAttributes<HTMLDivElement> &
  DropdownItemModifierProps

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  return (
    <div className={dropdownItemClassNames({ isActive }, className)} {...props}>
      {children}
    </div>
  )
}

export type DropdownItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  DropdownItemModifierProps

export const DropdownItemAnchor: FC<DropdownItemAnchorProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  return (
    <a className={dropdownItemClassNames({ isActive }, className)} {...props}>
      {children}
    </a>
  )
}

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
}) => {
  return (
    <div className="dropdown-trigger">
      <button className={classnames("button", className)} {...props}>
        {children}
      </button>
    </div>
  )
}
