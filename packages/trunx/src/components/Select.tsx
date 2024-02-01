import { FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames(
    "select",
    colorClassName(color),
    modifier({ isFocused, isHovered, isLoading }),
    sizeClassName(size),
    className
  )

  return (
    <div className={_class}>
      <select {...props}>
        {options.map((props, i) => (
          <option key={i} {...props} />
        ))}
      </select>
    </div>
  )
}
