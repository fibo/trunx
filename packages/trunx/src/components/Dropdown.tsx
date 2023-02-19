import {
  FC,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
  memo,
} from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, modifier } from '../modifiers/index.js'

export type DropdownProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'isActive' | 'isHoverable' | 'isRight' | 'isUp'>

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  children,
  className,
  isHoverable,
  isActive,
  isRight,
  isUp,
  ...props
}) => {
  const _className = useMemo(
    () => classNames('dropdown', modifier({ isActive, isHoverable, isRight, isUp }), className),
    [className, isActive, isHoverable, isRight, isUp]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export const DropdownDivider = memo(() => <hr className="dropdown-divider" />)
DropdownDivider.displayName = 'DropdownDivider'

type DropdownItemModifierProps = Pick<BooleanModifierProps, 'isActive'>

const dropdownItemClassNames = ({ isActive }: DropdownItemModifierProps, className?: string) =>
  classNames('dropdown-item', modifier({ isActive }), className)

export type DropdownItemProps = HTMLAttributes<HTMLDivElement> & DropdownItemModifierProps

export const DropdownItem: FC<DropdownItemProps> = ({ children, className, isActive, ...props }) => {
  const _className = useMemo(() => dropdownItemClassNames({ isActive }, className), [className, isActive])
  return (
    <div className={_className} {...props}>
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
  const _className = useMemo(() => dropdownItemClassNames({ isActive }, className), [className, isActive])
  return (
    <a className={_className} {...props}>
      {children}
    </a>
  )
}

export type DropdownMenuProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'>

export const DropdownMenu: FC<PropsWithChildren<DropdownMenuProps>> = ({ children, ...props }) => {
  return (
    <div className="dropdown-menu" {...props}>
      <div className="dropdown-content">{children}</div>
    </div>
  )
}

export type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement>

export const DropdownTrigger: FC<PropsWithChildren<DropdownTriggerProps>> = ({
  children,
  className,
  ...props
}) => {
  const _className = useMemo(() => classNames('button', className), [className])
  return (
    <div className="dropdown-trigger">
      <button className={_className} {...props}>
        {children}
      </button>
    </div>
  )
}
