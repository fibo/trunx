export type Dozen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type CommonModifierProps = Partial<{
  isActive: boolean
  isCentered: boolean
  isExpanded: boolean
  isDisabled: boolean
  isFocused: boolean
  isFullwidth: boolean
  isHoverable: boolean
  isHovered: boolean
  isLoading: boolean
  isLight: boolean
  isRight: boolean
  isRounded: boolean
  isStatic: boolean
}>

export const modifier = ({
  isActive,
  isCentered,
  isDisabled,
  isExpanded,
  isFocused,
  isFullwidth,
  isHoverable,
  isHovered,
  isLight,
  isLoading,
  isRight,
  isRounded,
  isStatic,
}: CommonModifierProps) => ({
  'is-active': isActive,
  'is-centered': isCentered,
  'is-expanded': isExpanded,
  'is-disabled': isDisabled,
  'is-focused': isFocused,
  'is-fullwidth': isFullwidth,
  'is-hoverable': isHoverable,
  'is-hovered': isHovered,
  'is-loading': isLoading,
  'is-light': isLight,
  'is-right': isRight,
  'is-rounded': isRounded,
  'is-static': isStatic,
})
