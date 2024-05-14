import {FC, OptionHTMLAttributes, SelectHTMLAttributes} from "react"
import {MainColor, colorClass, sizeClass} from "@trunx/bulma"
import {classnames} from "@trunx/classnames"
import {
  BooleanModifierProps,
  modifier,
} from "../modifiers/index.js"
import {ColorProp, SizeProp} from "./commonProps.js"

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  ColorProp<MainColor> &
  SizeProp &
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
        colorClass(color),
        modifier({isFocused, isHovered, isLoading}),
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
}
