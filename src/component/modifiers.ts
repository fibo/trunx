export interface IAlignementHelpersProps {
  hasTextCentered?: boolean
  hasTextJustified?: boolean
  hasTextLeft?: boolean
  hasTextRight?: boolean
}

export interface IBackgroundColorHelpersProps {
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

export interface IFloatHelpersProps {
  isClearfix?: boolean
  isPulledLeft?: boolean
  isPulledRight?: boolean
}

export interface IHelpersProps {
  isInvisible?: boolean
  isMarginLess?: boolean
  isPaddingLess?: boolean
  isSrOnly?: boolean
}

export interface IMainColorsProps {
  isDanger?: boolean
  isInfo?: boolean
  isLink?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
}

export interface IShadeColorsProps {
  isBlack?: boolean
  isDark?: boolean
  isLight?: boolean
  isWhite?: boolean
}

export interface ISizeProps {
  isLarge?: boolean
  isMedium?: boolean
  isSmall?: boolean
}

export interface ITextColorHelpersProps {
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

export function alignementPropsToClassnames(props: IAlignementHelpersProps) {
  const {
    hasTextCentered,
    hasTextJustified,
    hasTextLeft,
    hasTextRight,
  } = props

  return {
    "has-text-centered": hasTextCentered,
    "has-text-justified": hasTextJustified,
    "has-text-left": hasTextLeft,
    "has-text-right": hasTextRight,
  }
}

export function backgroundColorHelpersPropsToClassnames(props: IBackgroundColorHelpersProps) {
  const {
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
    hasBackgroundInfo,
    hasBackgroundLight,
    hasBackgroundLink,
    hasBackgroundPrimary,
    hasBackgroundSuccess,
    hasBackgroundWarning,
    hasBackgroundWhite,
    hasBackgroundWhiteBis,
    hasBackgroundWhiteTer,
  } = props

  return {
    "has-background-black": hasBackgroundBlack,
    "has-background-black-bis": hasBackgroundBlackBis,
    "has-background-black-ter": hasBackgroundBlackTer,
    "has-background-danger": hasBackgroundDanger,
    "has-background-dark": hasBackgroundDark,
    "has-background-grey": hasBackgroundGrey,
    "has-background-grey-dark": hasBackgroundGreyDark,
    "has-background-grey-darker": hasBackgroundGreyDarker,
    "has-background-grey-light": hasBackgroundGreyLight,
    "has-background-grey-lighter": hasBackgroundGreyLighter,
    "has-background-info": hasBackgroundInfo,
    "has-background-light": hasBackgroundLight,
    "has-background-link": hasBackgroundLink,
    "has-background-primary": hasBackgroundPrimary,
    "has-background-success": hasBackgroundSuccess,
    "has-background-warning": hasBackgroundWarning,
    "has-background-white": hasBackgroundWhite,
    "has-background-white-bis": hasBackgroundWhiteBis,
    "has-background-white-ter": hasBackgroundWhiteTer,
  }
}

export function floatHelpersPropsToClassnames(props: IFloatHelpersProps) {
  const {
    isClearfix,
    isPulledLeft,
    isPulledRight,
  } = props

  return {
    "is-clearfix": isClearfix,
    "is-pulled-left": isPulledLeft,
    "is-pulled-right": isPulledRight,
  }
}

export function helpersPropsToClassnames(props: IHelpersProps) {
  const {
    isInvisible,
    isMarginLess,
    isPaddingLess,
    isSrOnly,
  } = props

  return {
    "is-marginless": isMarginLess,
    "is-invisible": isInvisible,
    "is-paddingless": isPaddingLess,
    "is-sr-only": isSrOnly,
  }
}

export function mainColorsPropsToClassnames(props: IMainColorsProps) {
  const {
    isDanger,
    isInfo,
    isLink,
    isPrimary,
    isSuccess,
    isWarning,
  } = props

  return {
    "is-danger": isDanger,
    "is-info": isInfo,
    "is-link": isLink,
    "is-primary": isPrimary,
    "is-success": isSuccess,
    "is-warning": isWarning,
  }
}

export function shadeColorsPropsToClassnames(props: IShadeColorsProps) {
  const {
    isBlack,
    isDark,
    isLight,
    isWhite,
  } = props

  return {
    "is-black": isBlack,
    "is-dark": isDark,
    "is-light": isLight,
    "is-white": isWhite,
  }
}

export function sizePropsToClassnames(props: ISizeProps) {
  const {
    isLarge,
    isMedium,
    isSmall,
  } = props

  return {
    "is-large": isLarge,
    "is-medium": isMedium,
    "is-small": isSmall,
  }
}

export function textColorHelpersPropsToClassnames(props: ITextColorHelpersProps) {
  const {
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
    hasTextInfo,
    hasTextLight,
    hasTextLink,
    hasTextPrimary,
    hasTextSuccess,
    hasTextWarning,
    hasTextWhite,
    hasTextWhiteBis,
    hasTextWhiteTer,
  } = props

  return {
    "has-text-black": hasTextBlack,
    "has-text-black-bis": hasTextBlackBis,
    "has-text-black-ter": hasTextBlackTer,
    "has-text-danger": hasTextDanger,
    "has-text-dark": hasTextDark,
    "has-text-grey": hasTextGrey,
    "has-text-grey-dark": hasTextGreyDark,
    "has-text-grey-darker": hasTextGreyDarker,
    "has-text-grey-light": hasTextGreyLight,
    "has-text-grey-lighter": hasTextGreyLighter,
    "has-text-info": hasTextInfo,
    "has-text-light": hasTextLight,
    "has-text-link": hasTextLink,
    "has-text-primary": hasTextPrimary,
    "has-text-success": hasTextSuccess,
    "has-text-warning": hasTextWarning,
    "has-text-white": hasTextWhite,
    "has-text-white-bis": hasTextWhiteBis,
    "has-text-white-ter": hasTextWhiteTer,
  }
}
