import { ChangeEventHandler, FC, InputHTMLAttributes, useMemo } from 'react'
import { classNames } from '../classNames.js'
import {
  MainColor,
  ColorModifierProp,
  BooleanModifierProps,
  SizeModifierProp,
  colorClassName,
  modifier,
  sizeClassName,
} from '../modifiers/index.js'

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> &
  ColorModifierProp<MainColor> &
  SizeModifierProp &
  Pick<BooleanModifierProps, 'isFocused' | 'isHovered' | 'isLoading' | 'isRounded' | 'isStatic'> &
  Partial<{
    type: Exclude<
      InputHTMLAttributes<HTMLInputElement>,
      // Component FileUpload handles `type="file"`
      | 'file'
      // Component Radio handles `type="radio"`
      | 'radio'
    >
  }>

export const Input: FC<InputProps> = ({
  className,
  color,
  isFocused,
  isHovered,
  isLoading,
  isRounded,
  isStatic,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'input',
        colorClassName(color),
        sizeClassName(size),
        modifier({
          isFocused,
          isHovered,
          isLoading,
          isRounded,
          isStatic,
        }),
        className
      ),
    [color, isFocused, isHovered, size, isLoading, isRounded, isStatic]
  )

  return <input className={_className} {...props} />
}

/**
 * Callback helper, alias for `ChangeEventHandler<HTMLInputElement>`
 * @example
 * useCallback<InputOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 */
export type InputOnChange = ChangeEventHandler<HTMLInputElement>
