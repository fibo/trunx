import { FC, AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, SizeModifierProp, Size, modifier } from '../modifiers/index.js'

export type DropdownProps = HTMLAttributes<HTMLDivElement> &
  Pick<BooleanModifierProps, 'isActive' | 'isHoverable' | 'isRight' | 'isUp'> & {
    trigger: ReactNode
  }

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  children,
  className,
  trigger,
  ...props
}) => {
  const _className = useMemo(() => classNames('dropdown'), [className])
  return (
    <div className={_className} {...props}>
      <div className="dropdown-trigger">{trigger}</div>
    </div>
  )
}

export type DropdownItemProps = HTMLAttributes<HTMLDivElement> & Pick<BooleanModifierProps, 'isActive'>

export const DropdownItem: FC<DropdownItemProps> = ({ children, className, isActive, ...props }) => {
  const _className = useMemo(
    () => classNames('dropdown-item', modifier({ isActive }), className),
    [className, isActive]
  )
  return (
    <div className={_className} {...props}>
      {children}
    </div>
  )
}

export type DropdownItemAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const DropdownDivider = () => <hr className="dropdown-divider" />
