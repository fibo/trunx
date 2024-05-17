import {
ButtonClassArg,
ButtonDeleteClassArg,
ButtonsClassArg,
buttonClass,
buttonDeleteClass,
buttonsClass,
} from "@trunx/bulma"
import {ButtonHTMLAttributes, FC, HTMLAttributes, PropsWithChildren} from "react"

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & ButtonClassArg

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  color,
  isActive,
  isExpanded,
  isFocused,
  isFullwidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  isStatic,
  size,
  children,
  ...props
}) => (
  <button
className={buttonClass({
color, size,
        isActive,
        isExpanded,
        isFocused,
        isFullwidth,
        isInverted,
        isLight,
        isLoading,
        isOutlined,
        isRounded,
        isStatic,
      })}
    {...props}
  >
    {children}
  </button>
)

export type ButtonDeleteProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>  & ButtonDeleteClassArg

export const ButtonDelete: FC<ButtonDeleteProps> = ({size, ...props}) => (
  <button className={buttonDeleteClass({size})} {...props} />
)

export type ButtonsProps = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & ButtonsClassArg

export const Buttons: FC<PropsWithChildren<ButtonsProps>> = ({
  isCentered,
  size,
  children,
  ...props
}) => (
  <div
    className={buttonsClass({isCentered, size})}
    {...props}
  >
    {children}
  </div>
)
