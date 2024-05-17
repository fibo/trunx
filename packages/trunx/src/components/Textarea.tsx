import {FC, TextareaHTMLAttributes} from "react"
import {BoolClassArg, SizeArg, boolClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  SizeArg &
  Pick<
    BoolClassArg,
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
}) => (
  <textarea
    className={classnames(
      "textarea",
      boolClass({isActive, isFocused, isHovered, isLoading}),
      sizeClass(size),
      className
    )}
    {...props}
  >
    {children}
  </textarea>
)
