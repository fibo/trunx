import {
  FC,
  ChangeEventHandler,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from "react"
import { classNames } from "../classNames.js"
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  ColorModifierProp,
  MainColor,
  colorClassName,
  sizeClassName,
} from "../modifiers/index.js"

// Require that every option has `label` and `value`.
type Option = Omit<
  OptionHTMLAttributes<HTMLOptionElement>,
  "value" | "label"
> & {
  label: OptionHTMLAttributes<HTMLOptionElement>["label"]
  value: OptionHTMLAttributes<HTMLOptionElement>["value"]
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<BooleanModifierProps, "isFocused" | "isHovered" | "isLoading"> & {
    options: Option[]
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

/**
 * Callback helper.
 *
 * ```ts
 * @example
 * useCallback<SelectOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type SelectOnChange = ChangeEventHandler<
  SelectHTMLAttributes<HTMLSelectElement>
>
