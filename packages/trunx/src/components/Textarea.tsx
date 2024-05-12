import { FC, TextareaHTMLAttributes } from "react"
import { classnames } from "@trunx/classnames"
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
  return (
    <textarea
      className={classnames(
        "textarea",
        modifier({ isActive, isFocused, isHovered, isLoading }),
        sizeClassName(size),
        className
      )}
      {...props}
    >
      {children}
    </textarea>
  )
}
