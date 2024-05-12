import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import { classnames } from "@trunx/classnames"
import {
  BooleanModifierProps,
  ColorModifierProp,
  MainColor,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from "../modifiers/index.js"

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<BooleanModifierProps, "isFocused" | "isHovered" | "isLoading"> & {
    options: Array<OptionHTMLAttributes<HTMLOptionElement>>
  }

export const Select: FC<SelectProps> = ({
  className,
  color,
  isFocused,
  isHovered,
  isLoading,
  options,
  size,
  ...props
}) => {
  return (
    <div
      className={classnames(
        "select",
        colorClassName(color),
        modifier({ isFocused, isHovered, isLoading }),
        sizeClassName(size),
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
}
