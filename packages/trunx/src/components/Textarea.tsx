import { FC, TextareaHTMLAttributes, useMemo } from 'react'
import { classNames } from '../classNames.js'
import { BooleanModifierProps, SizeModifierProp, modifier, sizeClassName } from '../modifiers/index.js'

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  SizeModifierProp &
  Pick<BooleanModifierProps, 'isActive' | 'isFocused' | 'isHovered' | 'isLoading'>

export const TextArea: FC<TextAreaProps> = ({
  children,
  className,
  isActive,
  isFocused,
  isHovered,
  isLoading,
  size,
  ...props
}) => {
  const _className = useMemo(
    () =>
      classNames(
        'textarea',
        modifier({ isActive, isFocused, isHovered, isLoading }),
        sizeClassName(size),
        className
      ),
    [className, isActive, isFocused, isHovered, isLoading, size]
  )
  return (
    <textarea className={_className} {...props}>
      {children}
    </textarea>
  )
}
