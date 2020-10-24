export interface AlignementHelpersProps {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}
export interface BackgroundColorHelpersProps {
  hasBackgroundBlack?: boolean
  hasBackgroundBlackBis?: boolean
  hasBackgroundBlackTer?: boolean
  hasBackgroundDanger?: boolean
  hasBackgroundDark?: boolean
  hasBackgroundGrey?: boolean
  hasBackgroundGreyDark?: boolean
  hasBackgroundGreyDarker?: boolean
  hasBackgroundGreyLight?: boolean
  hasBackgroundGreyLighter?: boolean
  hasBackgroundLight?: boolean
  hasBackgroundLink?: boolean
  hasBackgroundInfo?: boolean
  hasBackgroundPrimary?: boolean
  hasBackgroundSuccess?: boolean
  hasBackgroundWarning?: boolean
  hasBackgroundWhite?: boolean
  hasBackgroundWhiteBis?: boolean
  hasBackgroundWhiteTer?: boolean
}
export interface FloatHelpersProps {
  isClearfix?: boolean
  isPulledLeft?: boolean
  isPulledRight?: boolean
}
export interface HelpersProps {
  isInvisible?: boolean
  isMarginLess?: boolean
  isPaddingLess?: boolean
  isSrOnly?: boolean
}
export interface OtherHelpersProps {
  isClickable?: boolean
  isRadiusLess?: boolean
  isShadowLess?: boolean
  isUnselectable?: boolean
}
export interface MainColorsProps {
  isDanger?: boolean
  isInfo?: boolean
  isLink?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}
export interface ShadeColorsProps {
  isBlack?: boolean
  isDark?: boolean
  isLight?: boolean
  isWhite?: boolean
}
export interface SizeProps {
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
}
export interface TextColorHelpersProps {
  hasTextBlack?: boolean
  hasTextBlackBis?: boolean
  hasTextBlackTer?: boolean
  hasTextDanger?: boolean
  hasTextDark?: boolean
  hasTextGrey?: boolean
  hasTextGreyDark?: boolean
  hasTextGreyDarker?: boolean
  hasTextGreyLight?: boolean
  hasTextGreyLighter?: boolean
  hasTextLight?: boolean
  hasTextLink?: boolean
  hasTextInfo?: boolean
  hasTextPrimary?: boolean
  hasTextSuccess?: boolean
  hasTextWarning?: boolean
  hasTextWhite?: boolean
  hasTextWhiteBis?: boolean
  hasTextWhiteTer?: boolean
}
export interface ModifiersProps
  extends AlignementHelpersProps,
    BackgroundColorHelpersProps,
    FloatHelpersProps,
    HelpersProps,
    MainColorsProps,
    ShadeColorsProps,
    SizeProps,
    TextColorHelpersProps {}
export interface ExtractModifiersPropsArg extends ModifiersProps {
  [prop: string]: any
}
export declare function modifierPropsToClassnamesObject(
  props?: ModifiersProps
): {}
export declare function extractModifiersProps({
  hasTextCentered,
  hasTextJustified,
  hasTextLeft,
  hasTextRight,
  hasBackgroundBlack,
  hasBackgroundBlackBis,
  hasBackgroundBlackTer,
  hasBackgroundDanger,
  hasBackgroundDark,
  hasBackgroundGrey,
  hasBackgroundGreyDark,
  hasBackgroundGreyDarker,
  hasBackgroundGreyLight,
  hasBackgroundGreyLighter,
  hasBackgroundLight,
  hasBackgroundLink,
  hasBackgroundInfo,
  hasBackgroundPrimary,
  hasBackgroundSuccess,
  hasBackgroundWarning,
  hasBackgroundWhite,
  hasBackgroundWhiteBis,
  hasBackgroundWhiteTer,
  isClearfix,
  isPulledLeft,
  isPulledRight,
  isInvisible,
  isMarginLess,
  isPaddingLess,
  isSrOnly,
  isClickable,
  isRadiusLess,
  isShadowLess,
  isUnselectable,
  isDanger,
  isInfo,
  isLink,
  isPrimary,
  isSuccess,
  isWarning,
  isBlack,
  isDark,
  isLight,
  isWhite,
  isLarge,
  isMedium,
  isSmall,
  hasTextBlack,
  hasTextBlackBis,
  hasTextBlackTer,
  hasTextDanger,
  hasTextDark,
  hasTextGrey,
  hasTextGreyDark,
  hasTextGreyDarker,
  hasTextGreyLight,
  hasTextGreyLighter,
  hasTextLight,
  hasTextLink,
  hasTextInfo,
  hasTextPrimary,
  hasTextSuccess,
  hasTextWarning,
  hasTextWhite,
  hasTextWhiteBis,
  hasTextWhiteTer,
  ...props
}: ExtractModifiersPropsArg): {
  [prop: string]: any
}[]
