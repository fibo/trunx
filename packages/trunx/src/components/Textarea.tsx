import {FC, TextareaHTMLAttributes} from "react"
import {sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"
import {SizeProp} from "./commonProps.js"

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  SizeProp &
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
        modifier({isActive, isFocused, isHovered, isLoading}),
        sizeClass(size),
        className
      )}
      {...props}
    >
      {children}
    </textarea>
  )
}
