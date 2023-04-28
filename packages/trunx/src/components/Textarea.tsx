import { FC, TextareaHTMLAttributes } from "react"
import { classNames } from "../classNames.js"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
    "isActive" | "isFocused" | "isHovered" | "isLoading"
  >

export const TextArea: FC<TextAreaProps> = ({
  children,
  className,
  isActive,
  isFocused,
  isHovered,
  isLoading,
  size,
  ...props
}) => {
  const _class = classNames(
    "textarea",
    modifier({ isActive, isFocused, isHovered, isLoading }),
    sizeClassName(size),
    className
  )

  return (
    <textarea className={_class} {...props}>
      {children}
    </textarea>
  )
}
