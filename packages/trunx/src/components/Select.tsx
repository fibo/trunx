import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import {
  BoolClassArg,
  ColorArg,
  MainColor,
  SizeArg,
  boolClass,
  colorClass,
  sizeClass,
} from "@trunx/bulma"
import { classnames } from "@trunx/classnames"

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Array<OptionHTMLAttributes<HTMLOptionElement>>
} & ColorArg<MainColor> &
  SizeArg &
  Pick<BoolClassArg, "isFocused" | "isHovered" | "isLoading">

export const Select: FC<SelectProps> = ({
  className,
  color,
  isFocused,
  isHovered,
  isLoading,
  options,
  size,
  ...props
}) => (
  <div
    className={classnames(
      "select",
      colorClass(color),
      boolClass({ isFocused, isHovered, isLoading }),
      sizeClass(size),
      className
    )}
  >
    <select {...props}>
      {options.map((props, i) => (
        <option key={i} {...props} />
      ))}
    </select>
  </div>
)
