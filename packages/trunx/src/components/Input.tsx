import {
  ChangeEventHandler,
  FocusEventHandler,
  FC,
  InputHTMLAttributes,
} from "react"
import { classNames } from "../classNames.js"
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
  const _class = classNames(
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
  )

  return <input className={_class} {...props} />
}

/**
 * Callback helper, alias for `React.ChangeEventHandler<HTMLInputElement>`.
 *
 * ```ts
 * @example
 * useCallback<InputOnChange>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type InputOnChange = ChangeEventHandler<HTMLInputElement>

/**
 * Callback helper, alias for `React.FocusEventHandler<HTMLInputElement>`.
 *
 * ```ts
 * @example
 * useCallback<InputOnFocus>((event) => {
 *   // `event` has the correct type.
 * })
 * ```
 */
export type InputOnFocus = FocusEventHandler<HTMLInputElement>
