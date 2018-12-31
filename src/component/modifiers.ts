export interface IMainColorsProps {
  isDanger?: boolean
  isInfo?: boolean
  isPrimary?: boolean
  isSuccess?: boolean
  isWarning?: boolean
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

export function mainColorsPropsToClassenames(props: IMainColorsProps) {
  const {
    isDanger,
    isInfo,
    isPrimary,
    isSuccess,
    isWarning,
  } = props

  return {
    "is-danger": isDanger,
    "is-info": isInfo,
    "is-primary": isPrimary,
    "is-success": isSuccess,
    "is-warning": isWarning,
  }
}

export function sizePropsToClassenames(props: ISizeProps) {
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

export function textColorHelpersPropsToClassenames(props: ITextColorHelpersProps) {
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
