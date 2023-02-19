import { FC, ChangeEventHandler, OptionHTMLAttributes, SelectHTMLAttributes, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  BooleanModifierProps,
  SizeModifierProp,
  modifier,
  ColorModifierProp,
  MainColor,
  colorClassName,
  sizeClassName,
} from '../modifiers/index.js'

/**
 * Pretend that every option has `label` and `value`.
 */
type Option = Omit<OptionHTMLAttributes<HTMLOptionElement>, 'value' | 'label'> & {
  label: OptionHTMLAttributes<HTMLOptionElement>['label']
  value: OptionHTMLAttributes<HTMLOptionElement>['value']
}

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<BooleanModifierProps, 'isFocused' | 'isHovered' | 'isLoading' | 'isMultiple'> & {
    options: Option[]
  }

export const Select: FC<SelectProps> = ({
  className,
  color,
  isFocused,
  isHovered,
  isLoading,
  isMultiple,
  options,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'select',
        colorClassName(color),
        modifier({ isFocused, isHovered, isLoading, isMultiple }),
        sizeClassName(size),
        className
      ),
    [className, color, size, isFocused, isHovered, isLoading, isMultiple]
  )

  return (
    <div className={_className}>
      <select {...props}>
        {options.map((props, i) => (
          <option key={i} {...props} />
        ))}
      </select>
    </div>
  )
}

/**
 * Callback helper, alias for `React.ChangeEventHandler<HTMLSelectElement>`.
 *
 * ```ts
 * @example
 * useCallback<SelectOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type SelectOnChange = ChangeEventHandler<HTMLSelectElement>
