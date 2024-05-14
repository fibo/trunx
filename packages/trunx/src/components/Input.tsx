import {FC, InputHTMLAttributes} from "react"
import {BoolClassArg, ColorArg, MainColor, SizeArg, boolClass, colorClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> &
  ColorArg<MainColor> &
  SizeArg &
  Pick<
    BoolClassArg,
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
}) => (
  <input
    className={classnames(
      "input",
      colorClass(color),
      sizeClass(size),
      boolClass({
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
