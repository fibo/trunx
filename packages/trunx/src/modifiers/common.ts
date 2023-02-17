export type Dozen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type CommonModifierProps = Partial<{
  isActive: boolean
  isCentered: boolean
  isFocused: boolean
  isFullwidth: boolean
  isHovered: boolean
  isLoading: boolean
  isRight: boolean
  isRounded: boolean
  isStatic: boolean
}>

export const modifier = ({
  isActive,
  isCentered,
  isFocused,
  isFullwidth,
  isHovered,
  isLoading,
  isRight,
  isRounded,
  isStatic,
}: CommonModifierProps) => ({
  'is-active': isActive,
  'is-centered': isCentered,
  'is-focused': isFocused,
  'is-fullwidth': isFullwidth,
  'is-hovered': isHovered,
  'is-loading': isLoading,
  'is-right': isRight,
  'is-rounded': isRounded,
  'is-static': isStatic,
})
