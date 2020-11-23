import { TrunxProps, trunxPropsToClassnamesObject } from './classNames'

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

export interface SpacingHelpersProps {
  m0?: boolean
  m1?: boolean
  m2?: boolean
  m3?: boolean
  m4?: boolean
  m5?: boolean
  m6?: boolean
  mt0?: boolean
  mt1?: boolean
  mt2?: boolean
  mt3?: boolean
  mt4?: boolean
  mt5?: boolean
  mt6?: boolean
  mr0?: boolean
  mr1?: boolean
  mr2?: boolean
  mr3?: boolean
  mr4?: boolean
  mr5?: boolean
  mr6?: boolean
  mb0?: boolean
  mb1?: boolean
  mb2?: boolean
  mb3?: boolean
  mb4?: boolean
  mb5?: boolean
  mb6?: boolean
  ml0?: boolean
  ml1?: boolean
  ml2?: boolean
  ml3?: boolean
  ml4?: boolean
  ml5?: boolean
  ml6?: boolean
  mx0?: boolean
  mx1?: boolean
  mx2?: boolean
  mx3?: boolean
  mx4?: boolean
  mx5?: boolean
  mx6?: boolean
  my0?: boolean
  my1?: boolean
  my2?: boolean
  my3?: boolean
  my4?: boolean
  my5?: boolean
  my6?: boolean
  p0?: boolean
  p1?: boolean
  p2?: boolean
  p3?: boolean
  p4?: boolean
  p5?: boolean
  p6?: boolean
  pt0?: boolean
  pt1?: boolean
  pt2?: boolean
  pt3?: boolean
  pt4?: boolean
  pt5?: boolean
  pt6?: boolean
  pr0?: boolean
  pr1?: boolean
  pr2?: boolean
  pr3?: boolean
  pr4?: boolean
  pr5?: boolean
  pr6?: boolean
  pb0?: boolean
  pb1?: boolean
  pb2?: boolean
  pb3?: boolean
  pb4?: boolean
  pb5?: boolean
  pb6?: boolean
  pl0?: boolean
  pl1?: boolean
  pl2?: boolean
  pl3?: boolean
  pl4?: boolean
  pl5?: boolean
  pl6?: boolean
  px0?: boolean
  px1?: boolean
  px2?: boolean
  px3?: boolean
  px4?: boolean
  px5?: boolean
  px6?: boolean
  py0?: boolean
  py1?: boolean
  py2?: boolean
  py3?: boolean
  py4?: boolean
  py5?: boolean
  py6?: boolean
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

export function modifierPropsToClassnamesObject(props?: ModifiersProps) {
  return trunxPropsToClassnamesObject(props as TrunxProps)
}

export function extractModifiersProps({
  // AlignementHelpersProps
  hasTextCentered,
  hasTextJustified,
  hasTextLeft,
  hasTextRight,
  // BackgroundColorHelpersProps
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
  // FloatHelpersProps
  isClearfix,
  isPulledLeft,
  isPulledRight,
  // HelpersProps
  isInvisible,
  isMarginLess,
  isPaddingLess,
  isSrOnly,
  // OtherHelpersProps
  isClickable,
  isRadiusLess,
  isShadowLess,
  isUnselectable,
  // MainColorsHelperProps
  isDanger,
  isInfo,
  isLink,
  isPrimary,
  isSuccess,
  isWarning,
  // ShadeColorsHelperProps
  isBlack,
  isDark,
  isLight,
  isWhite,
  // SizeProps
  isLarge,
  isMedium,
  isSmall,
  // SpacingHelpersProps
  m0,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  mt0,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mt6,
  mr0,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  mr6,
  mb0,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  mb6,
  ml0,
  ml1,
  ml2,
  ml3,
  ml4,
  ml5,
  ml6,
  mx0,
  mx1,
  mx2,
  mx3,
  mx4,
  mx5,
  mx6,
  my0,
  my1,
  my2,
  my3,
  my4,
  my5,
  my6,
  p0,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  pt0,
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pr0,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
  pr6,
  pb0,
  pb1,
  pb2,
  pb3,
  pb4,
  pb5,
  pb6,
  pl0,
  pl1,
  pl2,
  pl3,
  pl4,
  pl5,
  pl6,
  px0,
  px1,
  px2,
  px3,
  px4,
  px5,
  px6,
  py0,
  py1,
  py2,
  py3,
  py4,
  py5,
  py6,
  // TextColorHelpersProps
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
}: ExtractModifiersPropsArg) {
  return [
    {
      // AlignementHelpersProps
      hasTextCentered,
      hasTextJustified,
      hasTextLeft,
      hasTextRight,
      // BackgroundColorHelpersProps
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
      // FloatHelpersProps
      isClearfix,
      isPulledLeft,
      isPulledRight,
      // HelpersProps
      isInvisible,
      isMarginLess,
      isPaddingLess,
      isSrOnly,
      // OtherHelpersProps
      isClickable,
      isRadiusLess,
      isShadowLess,
      isUnselectable,
      // MainColorsHelperProps
      isDanger,
      isInfo,
      isLink,
      isPrimary,
      isSuccess,
      isWarning,
      // ShadeColorsHelperProps
      isBlack,
      isDark,
      isLight,
      isWhite,
      // SizeProps
      isLarge,
      isMedium,
      isSmall,
      // SpacingHelpersProps
      m0,
      m1,
      m2,
      m3,
      m4,
      m5,
      m6,
      mt0,
      mt1,
      mt2,
      mt3,
      mt4,
      mt5,
      mt6,
      mr0,
      mr1,
      mr2,
      mr3,
      mr4,
      mr5,
      mr6,
      mb0,
      mb1,
      mb2,
      mb3,
      mb4,
      mb5,
      mb6,
      ml0,
      ml1,
      ml2,
      ml3,
      ml4,
      ml5,
      ml6,
      mx0,
      mx1,
      mx2,
      mx3,
      mx4,
      mx5,
      mx6,
      my0,
      my1,
      my2,
      my3,
      my4,
      my5,
      my6,
      p0,
      p1,
      p2,
      p3,
      p4,
      p5,
      p6,
      pt0,
      pt1,
      pt2,
      pt3,
      pt4,
      pt5,
      pt6,
      pr0,
      pr1,
      pr2,
      pr3,
      pr4,
      pr5,
      pr6,
      pb0,
      pb1,
      pb2,
      pb3,
      pb4,
      pb5,
      pb6,
      pl0,
      pl1,
      pl2,
      pl3,
      pl4,
      pl5,
      pl6,
      px0,
      px1,
      px2,
      px3,
      px4,
      px5,
      px6,
      py0,
      py1,
      py2,
      py3,
      py4,
      py5,
      py6,
      // TextColorHelpersProps
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
    },
    props,
  ]
}
