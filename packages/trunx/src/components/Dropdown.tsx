import { FC, AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames("dropdown", modifier({ isActive, isHoverable, isRight, isUp }), className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export const DropdownDivider: FC = () => <hr className="dropdown-divider" />

type DropdownItemModifierProps = Pick<BooleanModifierProps, "isActive">

const dropdownItemClassNames = ({ isActive }: DropdownItemModifierProps, className?: string) =>
  classNames("dropdown-item", modifier({ isActive }), className)

export type DropdownItemProps = HTMLAttributes<HTMLDivElement> & DropdownItemModifierProps

export const DropdownItem: FC<DropdownItemProps> = ({ children, className, isActive, ...props }) => {
  const _class = dropdownItemClassNames({ isActive }, className)

  return (
    <div className={_class} {...props}>
      {children}
    </div>
  )
}

export type DropdownItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & DropdownItemModifierProps

export const DropdownItemAnchor: FC<DropdownItemAnchorProps> = ({
  children,
  className,
  isActive,
  ...props
}) => {
  const _class = dropdownItemClassNames({ isActive }, className)

  return (
    <a className={_class} {...props}>
      {children}
    </a>
  )
}

export type DropdownMenuProps = Omit<HTMLAttributes<HTMLDivElement>, "className">

export const DropdownMenu: FC<PropsWithChildren<DropdownMenuProps>> = ({ children, ...props }) => (
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
  const _class = classNames("button", className)

  return (
    <div className="dropdown-trigger">
      <button className={_class} {...props}>
        {children}
      </button>
    </div>
  )
}
