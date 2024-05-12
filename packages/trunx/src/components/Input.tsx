import { FC, InputHTMLAttributes } from "react"
import { classnames } from "@trunx/classnames"
import {
  MainColor,
  ColorModifierProp,
  BooleanModifierProps,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<
    BooleanModifierProps,
    "isFocused" | "isHovered" | "isRounded" | "isStatic"
  > &
  Partial<{
    type: Exclude<
      InputHTMLAttributes<HTMLInputElement>["type"],
      // Component FileUpload handles `type="file"`
      | "file"
      // Component Radio handles `type="radio"`
      | "radio"
    >
  }>

export const Input: FC<InputProps> = ({
  className,
  color,
  isFocused,
  isHovered,
  isRounded,
  isStatic,
  size,
  ...props
}) => {
  return (
    <input
      className={classnames(
        "input",
        colorClassName(color),
        sizeClassName(size),
        modifier({
          isFocused,
          isHovered,
          isRounded,
          isStatic,
        }),
        className
      )}
      {...props}
    />
  )
}
