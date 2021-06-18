Object.defineProperty(exports, "__esModule", { value: true });
exports.extractModifiersProps = exports.modifierPropsToClassnamesObject = void 0;
var tslib_1 = require("tslib");
var classNames_1 = require("./classNames");
function modifierPropsToClassnamesObject(props) {
    return classNames_1.trunxPropsToClassnamesObject(props);
}
exports.modifierPropsToClassnamesObject = modifierPropsToClassnamesObject;
function extractModifiersProps(_a) {
    var hasBackgroundBlack = _a.hasBackgroundBlack, hasBackgroundBlackBis = _a.hasBackgroundBlackBis, hasBackgroundBlackTer = _a.hasBackgroundBlackTer, hasBackgroundDanger = _a.hasBackgroundDanger, hasBackgroundDark = _a.hasBackgroundDark, hasBackgroundDangerDark = _a.hasBackgroundDangerDark, hasBackgroundDangerLight = _a.hasBackgroundDangerLight, hasBackgroundGrey = _a.hasBackgroundGrey, hasBackgroundGreyDark = _a.hasBackgroundGreyDark, hasBackgroundGreyDarker = _a.hasBackgroundGreyDarker, hasBackgroundGreyLight = _a.hasBackgroundGreyLight, hasBackgroundGreyLighter = _a.hasBackgroundGreyLighter, hasBackgroundLight = _a.hasBackgroundLight, hasBackgroundLink = _a.hasBackgroundLink, hasBackgroundLinkDark = _a.hasBackgroundLinkDark, hasBackgroundLinkLight = _a.hasBackgroundLinkLight, hasBackgroundInfo = _a.hasBackgroundInfo, hasBackgroundInfoDark = _a.hasBackgroundInfoDark, hasBackgroundInfoLight = _a.hasBackgroundInfoLight, hasBackgroundPrimary = _a.hasBackgroundPrimary, hasBackgroundPrimaryDark = _a.hasBackgroundPrimaryDark, hasBackgroundPrimaryLight = _a.hasBackgroundPrimaryLight, hasBackgroundSuccess = _a.hasBackgroundSuccess, hasBackgroundSuccessDark = _a.hasBackgroundSuccessDark, hasBackgroundSuccessLight = _a.hasBackgroundSuccessLight, hasBackgroundWarning = _a.hasBackgroundWarning, hasBackgroundWarningDark = _a.hasBackgroundWarningDark, hasBackgroundWarningLight = _a.hasBackgroundWarningLight, hasBackgroundWhite = _a.hasBackgroundWhite, hasBackgroundWhiteBis = _a.hasBackgroundWhiteBis, hasBackgroundWhiteTer = _a.hasBackgroundWhiteTer, isAlignContentBaseline = _a.isAlignContentBaseline, isAlignContentCenter = _a.isAlignContentCenter, isAlignContentEnd = _a.isAlignContentEnd, isAlignContentFlexEnd = _a.isAlignContentFlexEnd, isAlignContentFlexStart = _a.isAlignContentFlexStart, isAlignContentSpaceAround = _a.isAlignContentSpaceAround, isAlignContentSpaceBetween = _a.isAlignContentSpaceBetween, isAlignContentSpaceEvenly = _a.isAlignContentSpaceEvenly, isAlignContentStart = _a.isAlignContentStart, isAlignContentStretch = _a.isAlignContentStretch, isAlignItemsBaseline = _a.isAlignItemsBaseline, isAlignItemsCenter = _a.isAlignItemsCenter, isAlignItemsEnd = _a.isAlignItemsEnd, isAlignItemsFlexEnd = _a.isAlignItemsFlexEnd, isAlignItemsFlexStart = _a.isAlignItemsFlexStart, isAlignItemsSelfEnd = _a.isAlignItemsSelfEnd, isAlignItemsSelfStart = _a.isAlignItemsSelfStart, isAlignItemsSpaceAround = _a.isAlignItemsSpaceAround, isAlignItemsSpaceBetween = _a.isAlignItemsSpaceBetween, isAlignItemsSpaceEvenly = _a.isAlignItemsSpaceEvenly, isAlignItemsStart = _a.isAlignItemsStart, isAlignItemsStretch = _a.isAlignItemsStretch, isAlignSelfAuto = _a.isAlignSelfAuto, isAlignSelfBaseline = _a.isAlignSelfBaseline, isAlignSelfCenter = _a.isAlignSelfCenter, isAlignSelfFlexEnd = _a.isAlignSelfFlexEnd, isAlignSelfFlexStart = _a.isAlignSelfFlexStart, isAlignSelfStretch = _a.isAlignSelfStretch, isFlexDirectionColumn = _a.isFlexDirectionColumn, isFlexDirectionColumnReverse = _a.isFlexDirectionColumnReverse, isFlexDirectionRow = _a.isFlexDirectionRow, isFlexDirectionRowReverse = _a.isFlexDirectionRowReverse, isFlexGrow0 = _a.isFlexGrow0, isFlexGrow1 = _a.isFlexGrow1, isFlexGrow2 = _a.isFlexGrow2, isFlexGrow3 = _a.isFlexGrow3, isFlexGrow4 = _a.isFlexGrow4, isFlexGrow5 = _a.isFlexGrow5, isFlexShrink0 = _a.isFlexShrink0, isFlexShrink1 = _a.isFlexShrink1, isFlexShrink2 = _a.isFlexShrink2, isFlexShrink3 = _a.isFlexShrink3, isFlexShrink4 = _a.isFlexShrink4, isFlexShrink5 = _a.isFlexShrink5, isFlexWrapNowrap = _a.isFlexWrapNowrap, isFlexWrapWrap = _a.isFlexWrapWrap, isFlexWrapWrapReverse = _a.isFlexWrapWrapReverse, isJustifyContentCenter = _a.isJustifyContentCenter, isJustifyContentEnd = _a.isJustifyContentEnd, isJustifyContentFlexEnd = _a.isJustifyContentFlexEnd, isJustifyContentFlexStart = _a.isJustifyContentFlexStart, isJustifyContentLeft = _a.isJustifyContentLeft, isJustifyContentRight = _a.isJustifyContentRight, isJustifyContentSpaceAround = _a.isJustifyContentSpaceAround, isJustifyContentSpaceBetween = _a.isJustifyContentSpaceBetween, isJustifyContentSpaceEvenly = _a.isJustifyContentSpaceEvenly, isJustifyContentStart = _a.isJustifyContentStart, isFamilySansSerif = _a.isFamilySansSerif, isFamilyMonospace = _a.isFamilyMonospace, isFamilyPrimary = _a.isFamilyPrimary, isFamilySecondary = _a.isFamilySecondary, isFamilycode = _a.isFamilycode, isClearfix = _a.isClearfix, isClickable = _a.isClickable, isClipped = _a.isClipped, isOverlay = _a.isOverlay, isPulledLeft = _a.isPulledLeft, isPulledRight = _a.isPulledRight, isRadiusLess = _a.isRadiusLess, isRelative = _a.isRelative, isShadowLess = _a.isShadowLess, isUnselectable = _a.isUnselectable, isDanger = _a.isDanger, isInfo = _a.isInfo, isLink = _a.isLink, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isBlack = _a.isBlack, isDark = _a.isDark, isLight = _a.isLight, isWhite = _a.isWhite, isLarge = _a.isLarge, isMedium = _a.isMedium, isSmall = _a.isSmall, isMarginLess = _a.isMarginLess, isPaddingLess = _a.isPaddingLess, m0 = _a.m0, m1 = _a.m1, m2 = _a.m2, m3 = _a.m3, m4 = _a.m4, m5 = _a.m5, m6 = _a.m6, mt0 = _a.mt0, mt1 = _a.mt1, mt2 = _a.mt2, mt3 = _a.mt3, mt4 = _a.mt4, mt5 = _a.mt5, mt6 = _a.mt6, mr0 = _a.mr0, mr1 = _a.mr1, mr2 = _a.mr2, mr3 = _a.mr3, mr4 = _a.mr4, mr5 = _a.mr5, mr6 = _a.mr6, mb0 = _a.mb0, mb1 = _a.mb1, mb2 = _a.mb2, mb3 = _a.mb3, mb4 = _a.mb4, mb5 = _a.mb5, mb6 = _a.mb6, ml0 = _a.ml0, ml1 = _a.ml1, ml2 = _a.ml2, ml3 = _a.ml3, ml4 = _a.ml4, ml5 = _a.ml5, ml6 = _a.ml6, mx0 = _a.mx0, mx1 = _a.mx1, mx2 = _a.mx2, mx3 = _a.mx3, mx4 = _a.mx4, mx5 = _a.mx5, mx6 = _a.mx6, my0 = _a.my0, my1 = _a.my1, my2 = _a.my2, my3 = _a.my3, my4 = _a.my4, my5 = _a.my5, my6 = _a.my6, p0 = _a.p0, p1 = _a.p1, p2 = _a.p2, p3 = _a.p3, p4 = _a.p4, p5 = _a.p5, p6 = _a.p6, pt0 = _a.pt0, pt1 = _a.pt1, pt2 = _a.pt2, pt3 = _a.pt3, pt4 = _a.pt4, pt5 = _a.pt5, pt6 = _a.pt6, pr0 = _a.pr0, pr1 = _a.pr1, pr2 = _a.pr2, pr3 = _a.pr3, pr4 = _a.pr4, pr5 = _a.pr5, pr6 = _a.pr6, pb0 = _a.pb0, pb1 = _a.pb1, pb2 = _a.pb2, pb3 = _a.pb3, pb4 = _a.pb4, pb5 = _a.pb5, pb6 = _a.pb6, pl0 = _a.pl0, pl1 = _a.pl1, pl2 = _a.pl2, pl3 = _a.pl3, pl4 = _a.pl4, pl5 = _a.pl5, pl6 = _a.pl6, px0 = _a.px0, px1 = _a.px1, px2 = _a.px2, px3 = _a.px3, px4 = _a.px4, px5 = _a.px5, px6 = _a.px6, py0 = _a.py0, py1 = _a.py1, py2 = _a.py2, py3 = _a.py3, py4 = _a.py4, py5 = _a.py5, py6 = _a.py6, hasTextBlack = _a.hasTextBlack, hasTextBlackBis = _a.hasTextBlackBis, hasTextBlackTer = _a.hasTextBlackTer, hasTextDanger = _a.hasTextDanger, hasTextDark = _a.hasTextDark, hasTextGrey = _a.hasTextGrey, hasTextGreyDark = _a.hasTextGreyDark, hasTextGreyDarker = _a.hasTextGreyDarker, hasTextGreyLight = _a.hasTextGreyLight, hasTextGreyLighter = _a.hasTextGreyLighter, hasTextLight = _a.hasTextLight, hasTextLink = _a.hasTextLink, hasTextInfo = _a.hasTextInfo, hasTextPrimary = _a.hasTextPrimary, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, hasTextWhite = _a.hasTextWhite, hasTextWhiteBis = _a.hasTextWhiteBis, hasTextWhiteTer = _a.hasTextWhiteTer, isCapitalized = _a.isCapitalized, isItalic = _a.isItalic, isLowercase = _a.isLowercase, isUnderlined = _a.isUnderlined, isUppercase = _a.isUppercase, hasTextWeightLight = _a.hasTextWeightLight, hasTextWeightNormal = _a.hasTextWeightNormal, hasTextWeightMedium = _a.hasTextWeightMedium, hasTextWeightSemibold = _a.hasTextWeightSemibold, hasTextWeightBold = _a.hasTextWeightBold, hasTextCentered = _a.hasTextCentered, hasTextCenteredDesktop = _a.hasTextCenteredDesktop, hasTextCenteredDesktopOnly = _a.hasTextCenteredDesktopOnly, hasTextCenteredFullhd = _a.hasTextCenteredFullhd, hasTextCenteredMobile = _a.hasTextCenteredMobile, hasTextCenteredTablet = _a.hasTextCenteredTablet, hasTextCenteredTabletOnly = _a.hasTextCenteredTabletOnly, hasTextCenteredTouch = _a.hasTextCenteredTouch, hasTextCenteredWidescreen = _a.hasTextCenteredWidescreen, hasTextCenteredWidescreenOnly = _a.hasTextCenteredWidescreenOnly, hasTextJustified = _a.hasTextJustified, hasTextJustifiedDesktop = _a.hasTextJustifiedDesktop, hasTextJustifiedDesktopOnly = _a.hasTextJustifiedDesktopOnly, hasTextJustifiedFullhd = _a.hasTextJustifiedFullhd, hasTextJustifiedMobile = _a.hasTextJustifiedMobile, hasTextJustifiedTablet = _a.hasTextJustifiedTablet, hasTextJustifiedTabletOnly = _a.hasTextJustifiedTabletOnly, hasTextJustifiedTouch = _a.hasTextJustifiedTouch, hasTextJustifiedWidescreen = _a.hasTextJustifiedWidescreen, hasTextJustifiedWidescreenOnly = _a.hasTextJustifiedWidescreenOnly, hasTextLeft = _a.hasTextLeft, hasTextLeftDesktop = _a.hasTextLeftDesktop, hasTextLeftDesktopOnly = _a.hasTextLeftDesktopOnly, hasTextLeftFullhd = _a.hasTextLeftFullhd, hasTextLeftMobile = _a.hasTextLeftMobile, hasTextLeftTablet = _a.hasTextLeftTablet, hasTextLeftTabletOnly = _a.hasTextLeftTabletOnly, hasTextLeftTouch = _a.hasTextLeftTouch, hasTextLeftWidescreen = _a.hasTextLeftWidescreen, hasTextLeftWidescreenOnly = _a.hasTextLeftWidescreenOnly, hasTextRight = _a.hasTextRight, hasTextRightDesktop = _a.hasTextRightDesktop, hasTextRightDesktopOnly = _a.hasTextRightDesktopOnly, hasTextRightFullhd = _a.hasTextRightFullhd, hasTextRightMobile = _a.hasTextRightMobile, hasTextRightTablet = _a.hasTextRightTablet, hasTextRightTabletOnly = _a.hasTextRightTabletOnly, hasTextRightTouch = _a.hasTextRightTouch, hasTextRightWidescreen = _a.hasTextRightWidescreen, hasTextRightWidescreenOnly = _a.hasTextRightWidescreenOnly, isSize1 = _a.isSize1, isSize1Mobile = _a.isSize1Mobile, isSize1Touch = _a.isSize1Touch, isSize1Tablet = _a.isSize1Tablet, isSize1Desktop = _a.isSize1Desktop, isSize1Widescreen = _a.isSize1Widescreen, isSize1Fullhd = _a.isSize1Fullhd, isSize2 = _a.isSize2, isSize2Mobile = _a.isSize2Mobile, isSize2Touch = _a.isSize2Touch, isSize2Tablet = _a.isSize2Tablet, isSize2Desktop = _a.isSize2Desktop, isSize2Widescreen = _a.isSize2Widescreen, isSize2Fullhd = _a.isSize2Fullhd, isSize3 = _a.isSize3, isSize3Mobile = _a.isSize3Mobile, isSize3Touch = _a.isSize3Touch, isSize3Tablet = _a.isSize3Tablet, isSize3Desktop = _a.isSize3Desktop, isSize3Widescreen = _a.isSize3Widescreen, isSize3Fullhd = _a.isSize3Fullhd, isSize4 = _a.isSize4, isSize4Mobile = _a.isSize4Mobile, isSize4Touch = _a.isSize4Touch, isSize4Tablet = _a.isSize4Tablet, isSize4Desktop = _a.isSize4Desktop, isSize4Widescreen = _a.isSize4Widescreen, isSize4Fullhd = _a.isSize4Fullhd, isSize5 = _a.isSize5, isSize5Mobile = _a.isSize5Mobile, isSize5Touch = _a.isSize5Touch, isSize5Tablet = _a.isSize5Tablet, isSize5Desktop = _a.isSize5Desktop, isSize5Widescreen = _a.isSize5Widescreen, isSize5Fullhd = _a.isSize5Fullhd, isSize6 = _a.isSize6, isSize6Mobile = _a.isSize6Mobile, isSize6Touch = _a.isSize6Touch, isSize6Tablet = _a.isSize6Tablet, isSize6Desktop = _a.isSize6Desktop, isSize6Widescreen = _a.isSize6Widescreen, isSize6Fullhd = _a.isSize6Fullhd, isSize7 = _a.isSize7, isSize7Mobile = _a.isSize7Mobile, isSize7Touch = _a.isSize7Touch, isSize7Tablet = _a.isSize7Tablet, isSize7Desktop = _a.isSize7Desktop, isSize7Widescreen = _a.isSize7Widescreen, isSize7Fullhd = _a.isSize7Fullhd, isBlock = _a.isBlock, isBlockDesktop = _a.isBlockDesktop, isBlockDesktopOnly = _a.isBlockDesktopOnly, isBlockFullhd = _a.isBlockFullhd, isBlockMobile = _a.isBlockMobile, isBlockTablet = _a.isBlockTablet, isBlockTabletOnly = _a.isBlockTabletOnly, isBlockTouch = _a.isBlockTouch, isBlockWidescreen = _a.isBlockWidescreen, isBlockWidescreenOnly = _a.isBlockWidescreenOnly, isFlex = _a.isFlex, isFlexDesktop = _a.isFlexDesktop, isFlexDesktopOnly = _a.isFlexDesktopOnly, isFlexFullhd = _a.isFlexFullhd, isFlexMobile = _a.isFlexMobile, isFlexTablet = _a.isFlexTablet, isFlexTabletOnly = _a.isFlexTabletOnly, isFlexTouch = _a.isFlexTouch, isFlexWidescreen = _a.isFlexWidescreen, isFlexWidescreenOnly = _a.isFlexWidescreenOnly, isHidden = _a.isHidden, isHiddenDesktop = _a.isHiddenDesktop, isHiddenDesktopOnly = _a.isHiddenDesktopOnly, isHiddenFullhd = _a.isHiddenFullhd, isHiddenMobile = _a.isHiddenMobile, isHiddenTablet = _a.isHiddenTablet, isHiddenTabletOnly = _a.isHiddenTabletOnly, isHiddenTouch = _a.isHiddenTouch, isHiddenWidescreen = _a.isHiddenWidescreen, isHiddenWidescreenOnly = _a.isHiddenWidescreenOnly, isInline = _a.isInline, isInlineBlock = _a.isInlineBlock, isInlineBlockDesktop = _a.isInlineBlockDesktop, isInlineBlockDesktopOnly = _a.isInlineBlockDesktopOnly, isInlineBlockFullhd = _a.isInlineBlockFullhd, isInlineBlockMobile = _a.isInlineBlockMobile, isInlineBlockTablet = _a.isInlineBlockTablet, isInlineBlockTabletOnly = _a.isInlineBlockTabletOnly, isInlineBlockTouch = _a.isInlineBlockTouch, isInlineBlockWidescreen = _a.isInlineBlockWidescreen, isInlineBlockWidescreenOnly = _a.isInlineBlockWidescreenOnly, isInlineDesktop = _a.isInlineDesktop, isInlineDesktopOnly = _a.isInlineDesktopOnly, isInlineFlex = _a.isInlineFlex, isInlineFlexDesktop = _a.isInlineFlexDesktop, isInlineFlexDesktopOnly = _a.isInlineFlexDesktopOnly, isInlineFlexFullhd = _a.isInlineFlexFullhd, isInlineFlexMobile = _a.isInlineFlexMobile, isInlineFlexTablet = _a.isInlineFlexTablet, isInlineFlexTabletOnly = _a.isInlineFlexTabletOnly, isInlineFlexTouch = _a.isInlineFlexTouch, isInlineFlexWidescreen = _a.isInlineFlexWidescreen, isInlineFlexWidescreenOnly = _a.isInlineFlexWidescreenOnly, isInlineFullhd = _a.isInlineFullhd, isInlineMobile = _a.isInlineMobile, isInlineTablet = _a.isInlineTablet, isInlineTabletOnly = _a.isInlineTabletOnly, isInlineTouch = _a.isInlineTouch, isInlineWidescreen = _a.isInlineWidescreen, isInlineWidescreenOnly = _a.isInlineWidescreenOnly, isInvisible = _a.isInvisible, isSrOnly = _a.isSrOnly, props = tslib_1.__rest(_a, ["hasBackgroundBlack", "hasBackgroundBlackBis", "hasBackgroundBlackTer", "hasBackgroundDanger", "hasBackgroundDark", "hasBackgroundDangerDark", "hasBackgroundDangerLight", "hasBackgroundGrey", "hasBackgroundGreyDark", "hasBackgroundGreyDarker", "hasBackgroundGreyLight", "hasBackgroundGreyLighter", "hasBackgroundLight", "hasBackgroundLink", "hasBackgroundLinkDark", "hasBackgroundLinkLight", "hasBackgroundInfo", "hasBackgroundInfoDark", "hasBackgroundInfoLight", "hasBackgroundPrimary", "hasBackgroundPrimaryDark", "hasBackgroundPrimaryLight", "hasBackgroundSuccess", "hasBackgroundSuccessDark", "hasBackgroundSuccessLight", "hasBackgroundWarning", "hasBackgroundWarningDark", "hasBackgroundWarningLight", "hasBackgroundWhite", "hasBackgroundWhiteBis", "hasBackgroundWhiteTer", "isAlignContentBaseline", "isAlignContentCenter", "isAlignContentEnd", "isAlignContentFlexEnd", "isAlignContentFlexStart", "isAlignContentSpaceAround", "isAlignContentSpaceBetween", "isAlignContentSpaceEvenly", "isAlignContentStart", "isAlignContentStretch", "isAlignItemsBaseline", "isAlignItemsCenter", "isAlignItemsEnd", "isAlignItemsFlexEnd", "isAlignItemsFlexStart", "isAlignItemsSelfEnd", "isAlignItemsSelfStart", "isAlignItemsSpaceAround", "isAlignItemsSpaceBetween", "isAlignItemsSpaceEvenly", "isAlignItemsStart", "isAlignItemsStretch", "isAlignSelfAuto", "isAlignSelfBaseline", "isAlignSelfCenter", "isAlignSelfFlexEnd", "isAlignSelfFlexStart", "isAlignSelfStretch", "isFlexDirectionColumn", "isFlexDirectionColumnReverse", "isFlexDirectionRow", "isFlexDirectionRowReverse", "isFlexGrow0", "isFlexGrow1", "isFlexGrow2", "isFlexGrow3", "isFlexGrow4", "isFlexGrow5", "isFlexShrink0", "isFlexShrink1", "isFlexShrink2", "isFlexShrink3", "isFlexShrink4", "isFlexShrink5", "isFlexWrapNowrap", "isFlexWrapWrap", "isFlexWrapWrapReverse", "isJustifyContentCenter", "isJustifyContentEnd", "isJustifyContentFlexEnd", "isJustifyContentFlexStart", "isJustifyContentLeft", "isJustifyContentRight", "isJustifyContentSpaceAround", "isJustifyContentSpaceBetween", "isJustifyContentSpaceEvenly", "isJustifyContentStart", "isFamilySansSerif", "isFamilyMonospace", "isFamilyPrimary", "isFamilySecondary", "isFamilycode", "isClearfix", "isClickable", "isClipped", "isOverlay", "isPulledLeft", "isPulledRight", "isRadiusLess", "isRelative", "isShadowLess", "isUnselectable", "isDanger", "isInfo", "isLink", "isPrimary", "isSuccess", "isWarning", "isBlack", "isDark", "isLight", "isWhite", "isLarge", "isMedium", "isSmall", "isMarginLess", "isPaddingLess", "m0", "m1", "m2", "m3", "m4", "m5", "m6", "mt0", "mt1", "mt2", "mt3", "mt4", "mt5", "mt6", "mr0", "mr1", "mr2", "mr3", "mr4", "mr5", "mr6", "mb0", "mb1", "mb2", "mb3", "mb4", "mb5", "mb6", "ml0", "ml1", "ml2", "ml3", "ml4", "ml5", "ml6", "mx0", "mx1", "mx2", "mx3", "mx4", "mx5", "mx6", "my0", "my1", "my2", "my3", "my4", "my5", "my6", "p0", "p1", "p2", "p3", "p4", "p5", "p6", "pt0", "pt1", "pt2", "pt3", "pt4", "pt5", "pt6", "pr0", "pr1", "pr2", "pr3", "pr4", "pr5", "pr6", "pb0", "pb1", "pb2", "pb3", "pb4", "pb5", "pb6", "pl0", "pl1", "pl2", "pl3", "pl4", "pl5", "pl6", "px0", "px1", "px2", "px3", "px4", "px5", "px6", "py0", "py1", "py2", "py3", "py4", "py5", "py6", "hasTextBlack", "hasTextBlackBis", "hasTextBlackTer", "hasTextDanger", "hasTextDark", "hasTextGrey", "hasTextGreyDark", "hasTextGreyDarker", "hasTextGreyLight", "hasTextGreyLighter", "hasTextLight", "hasTextLink", "hasTextInfo", "hasTextPrimary", "hasTextSuccess", "hasTextWarning", "hasTextWhite", "hasTextWhiteBis", "hasTextWhiteTer", "isCapitalized", "isItalic", "isLowercase", "isUnderlined", "isUppercase", "hasTextWeightLight", "hasTextWeightNormal", "hasTextWeightMedium", "hasTextWeightSemibold", "hasTextWeightBold", "hasTextCentered", "hasTextCenteredDesktop", "hasTextCenteredDesktopOnly", "hasTextCenteredFullhd", "hasTextCenteredMobile", "hasTextCenteredTablet", "hasTextCenteredTabletOnly", "hasTextCenteredTouch", "hasTextCenteredWidescreen", "hasTextCenteredWidescreenOnly", "hasTextJustified", "hasTextJustifiedDesktop", "hasTextJustifiedDesktopOnly", "hasTextJustifiedFullhd", "hasTextJustifiedMobile", "hasTextJustifiedTablet", "hasTextJustifiedTabletOnly", "hasTextJustifiedTouch", "hasTextJustifiedWidescreen", "hasTextJustifiedWidescreenOnly", "hasTextLeft", "hasTextLeftDesktop", "hasTextLeftDesktopOnly", "hasTextLeftFullhd", "hasTextLeftMobile", "hasTextLeftTablet", "hasTextLeftTabletOnly", "hasTextLeftTouch", "hasTextLeftWidescreen", "hasTextLeftWidescreenOnly", "hasTextRight", "hasTextRightDesktop", "hasTextRightDesktopOnly", "hasTextRightFullhd", "hasTextRightMobile", "hasTextRightTablet", "hasTextRightTabletOnly", "hasTextRightTouch", "hasTextRightWidescreen", "hasTextRightWidescreenOnly", "isSize1", "isSize1Mobile", "isSize1Touch", "isSize1Tablet", "isSize1Desktop", "isSize1Widescreen", "isSize1Fullhd", "isSize2", "isSize2Mobile", "isSize2Touch", "isSize2Tablet", "isSize2Desktop", "isSize2Widescreen", "isSize2Fullhd", "isSize3", "isSize3Mobile", "isSize3Touch", "isSize3Tablet", "isSize3Desktop", "isSize3Widescreen", "isSize3Fullhd", "isSize4", "isSize4Mobile", "isSize4Touch", "isSize4Tablet", "isSize4Desktop", "isSize4Widescreen", "isSize4Fullhd", "isSize5", "isSize5Mobile", "isSize5Touch", "isSize5Tablet", "isSize5Desktop", "isSize5Widescreen", "isSize5Fullhd", "isSize6", "isSize6Mobile", "isSize6Touch", "isSize6Tablet", "isSize6Desktop", "isSize6Widescreen", "isSize6Fullhd", "isSize7", "isSize7Mobile", "isSize7Touch", "isSize7Tablet", "isSize7Desktop", "isSize7Widescreen", "isSize7Fullhd", "isBlock", "isBlockDesktop", "isBlockDesktopOnly", "isBlockFullhd", "isBlockMobile", "isBlockTablet", "isBlockTabletOnly", "isBlockTouch", "isBlockWidescreen", "isBlockWidescreenOnly", "isFlex", "isFlexDesktop", "isFlexDesktopOnly", "isFlexFullhd", "isFlexMobile", "isFlexTablet", "isFlexTabletOnly", "isFlexTouch", "isFlexWidescreen", "isFlexWidescreenOnly", "isHidden", "isHiddenDesktop", "isHiddenDesktopOnly", "isHiddenFullhd", "isHiddenMobile", "isHiddenTablet", "isHiddenTabletOnly", "isHiddenTouch", "isHiddenWidescreen", "isHiddenWidescreenOnly", "isInline", "isInlineBlock", "isInlineBlockDesktop", "isInlineBlockDesktopOnly", "isInlineBlockFullhd", "isInlineBlockMobile", "isInlineBlockTablet", "isInlineBlockTabletOnly", "isInlineBlockTouch", "isInlineBlockWidescreen", "isInlineBlockWidescreenOnly", "isInlineDesktop", "isInlineDesktopOnly", "isInlineFlex", "isInlineFlexDesktop", "isInlineFlexDesktopOnly", "isInlineFlexFullhd", "isInlineFlexMobile", "isInlineFlexTablet", "isInlineFlexTabletOnly", "isInlineFlexTouch", "isInlineFlexWidescreen", "isInlineFlexWidescreenOnly", "isInlineFullhd", "isInlineMobile", "isInlineTablet", "isInlineTabletOnly", "isInlineTouch", "isInlineWidescreen", "isInlineWidescreenOnly", "isInvisible", "isSrOnly"]);
    return [
        {
            hasBackgroundBlack: hasBackgroundBlack,
            hasBackgroundBlackBis: hasBackgroundBlackBis,
            hasBackgroundBlackTer: hasBackgroundBlackTer,
            hasBackgroundDanger: hasBackgroundDanger,
            hasBackgroundDark: hasBackgroundDark,
            hasBackgroundDangerDark: hasBackgroundDangerDark,
            hasBackgroundDangerLight: hasBackgroundDangerLight,
            hasBackgroundGrey: hasBackgroundGrey,
            hasBackgroundGreyDark: hasBackgroundGreyDark,
            hasBackgroundGreyDarker: hasBackgroundGreyDarker,
            hasBackgroundGreyLight: hasBackgroundGreyLight,
            hasBackgroundGreyLighter: hasBackgroundGreyLighter,
            hasBackgroundLight: hasBackgroundLight,
            hasBackgroundLink: hasBackgroundLink,
            hasBackgroundLinkDark: hasBackgroundLinkDark,
            hasBackgroundLinkLight: hasBackgroundLinkLight,
            hasBackgroundInfo: hasBackgroundInfo,
            hasBackgroundInfoDark: hasBackgroundInfoDark,
            hasBackgroundInfoLight: hasBackgroundInfoLight,
            hasBackgroundPrimary: hasBackgroundPrimary,
            hasBackgroundPrimaryDark: hasBackgroundPrimaryDark,
            hasBackgroundPrimaryLight: hasBackgroundPrimaryLight,
            hasBackgroundSuccess: hasBackgroundSuccess,
            hasBackgroundSuccessDark: hasBackgroundSuccessDark,
            hasBackgroundSuccessLight: hasBackgroundSuccessLight,
            hasBackgroundWarning: hasBackgroundWarning,
            hasBackgroundWarningDark: hasBackgroundWarningDark,
            hasBackgroundWarningLight: hasBackgroundWarningLight,
            hasBackgroundWhite: hasBackgroundWhite,
            hasBackgroundWhiteBis: hasBackgroundWhiteBis,
            hasBackgroundWhiteTer: hasBackgroundWhiteTer,
            isAlignContentBaseline: isAlignContentBaseline,
            isAlignContentCenter: isAlignContentCenter,
            isAlignContentEnd: isAlignContentEnd,
            isAlignContentFlexEnd: isAlignContentFlexEnd,
            isAlignContentFlexStart: isAlignContentFlexStart,
            isAlignContentSpaceAround: isAlignContentSpaceAround,
            isAlignContentSpaceBetween: isAlignContentSpaceBetween,
            isAlignContentSpaceEvenly: isAlignContentSpaceEvenly,
            isAlignContentStart: isAlignContentStart,
            isAlignContentStretch: isAlignContentStretch,
            isAlignItemsBaseline: isAlignItemsBaseline,
            isAlignItemsCenter: isAlignItemsCenter,
            isAlignItemsEnd: isAlignItemsEnd,
            isAlignItemsFlexEnd: isAlignItemsFlexEnd,
            isAlignItemsFlexStart: isAlignItemsFlexStart,
            isAlignItemsSelfEnd: isAlignItemsSelfEnd,
            isAlignItemsSelfStart: isAlignItemsSelfStart,
            isAlignItemsSpaceAround: isAlignItemsSpaceAround,
            isAlignItemsSpaceBetween: isAlignItemsSpaceBetween,
            isAlignItemsSpaceEvenly: isAlignItemsSpaceEvenly,
            isAlignItemsStart: isAlignItemsStart,
            isAlignItemsStretch: isAlignItemsStretch,
            isAlignSelfAuto: isAlignSelfAuto,
            isAlignSelfBaseline: isAlignSelfBaseline,
            isAlignSelfCenter: isAlignSelfCenter,
            isAlignSelfFlexEnd: isAlignSelfFlexEnd,
            isAlignSelfFlexStart: isAlignSelfFlexStart,
            isAlignSelfStretch: isAlignSelfStretch,
            isFlexDirectionColumn: isFlexDirectionColumn,
            isFlexDirectionColumnReverse: isFlexDirectionColumnReverse,
            isFlexDirectionRow: isFlexDirectionRow,
            isFlexDirectionRowReverse: isFlexDirectionRowReverse,
            isFlexGrow0: isFlexGrow0,
            isFlexGrow1: isFlexGrow1,
            isFlexGrow2: isFlexGrow2,
            isFlexGrow3: isFlexGrow3,
            isFlexGrow4: isFlexGrow4,
            isFlexGrow5: isFlexGrow5,
            isFlexShrink0: isFlexShrink0,
            isFlexShrink1: isFlexShrink1,
            isFlexShrink2: isFlexShrink2,
            isFlexShrink3: isFlexShrink3,
            isFlexShrink4: isFlexShrink4,
            isFlexShrink5: isFlexShrink5,
            isFlexWrapNowrap: isFlexWrapNowrap,
            isFlexWrapWrap: isFlexWrapWrap,
            isFlexWrapWrapReverse: isFlexWrapWrapReverse,
            isJustifyContentCenter: isJustifyContentCenter,
            isJustifyContentEnd: isJustifyContentEnd,
            isJustifyContentFlexEnd: isJustifyContentFlexEnd,
            isJustifyContentFlexStart: isJustifyContentFlexStart,
            isJustifyContentLeft: isJustifyContentLeft,
            isJustifyContentRight: isJustifyContentRight,
            isJustifyContentSpaceAround: isJustifyContentSpaceAround,
            isJustifyContentSpaceBetween: isJustifyContentSpaceBetween,
            isJustifyContentSpaceEvenly: isJustifyContentSpaceEvenly,
            isJustifyContentStart: isJustifyContentStart,
            isFamilySansSerif: isFamilySansSerif,
            isFamilyMonospace: isFamilyMonospace,
            isFamilyPrimary: isFamilyPrimary,
            isFamilySecondary: isFamilySecondary,
            isFamilycode: isFamilycode,
            isClearfix: isClearfix,
            isClickable: isClickable,
            isClipped: isClipped,
            isOverlay: isOverlay,
            isPulledLeft: isPulledLeft,
            isPulledRight: isPulledRight,
            isRadiusLess: isRadiusLess,
            isRelative: isRelative,
            isShadowLess: isShadowLess,
            isUnselectable: isUnselectable,
            isDanger: isDanger,
            isInfo: isInfo,
            isLink: isLink,
            isPrimary: isPrimary,
            isSuccess: isSuccess,
            isWarning: isWarning,
            isBlack: isBlack,
            isDark: isDark,
            isLight: isLight,
            isWhite: isWhite,
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
            isMarginLess: isMarginLess,
            isPaddingLess: isPaddingLess,
            m0: m0,
            m1: m1,
            m2: m2,
            m3: m3,
            m4: m4,
            m5: m5,
            m6: m6,
            mt0: mt0,
            mt1: mt1,
            mt2: mt2,
            mt3: mt3,
            mt4: mt4,
            mt5: mt5,
            mt6: mt6,
            mr0: mr0,
            mr1: mr1,
            mr2: mr2,
            mr3: mr3,
            mr4: mr4,
            mr5: mr5,
            mr6: mr6,
            mb0: mb0,
            mb1: mb1,
            mb2: mb2,
            mb3: mb3,
            mb4: mb4,
            mb5: mb5,
            mb6: mb6,
            ml0: ml0,
            ml1: ml1,
            ml2: ml2,
            ml3: ml3,
            ml4: ml4,
            ml5: ml5,
            ml6: ml6,
            mx0: mx0,
            mx1: mx1,
            mx2: mx2,
            mx3: mx3,
            mx4: mx4,
            mx5: mx5,
            mx6: mx6,
            my0: my0,
            my1: my1,
            my2: my2,
            my3: my3,
            my4: my4,
            my5: my5,
            my6: my6,
            p0: p0,
            p1: p1,
            p2: p2,
            p3: p3,
            p4: p4,
            p5: p5,
            p6: p6,
            pt0: pt0,
            pt1: pt1,
            pt2: pt2,
            pt3: pt3,
            pt4: pt4,
            pt5: pt5,
            pt6: pt6,
            pr0: pr0,
            pr1: pr1,
            pr2: pr2,
            pr3: pr3,
            pr4: pr4,
            pr5: pr5,
            pr6: pr6,
            pb0: pb0,
            pb1: pb1,
            pb2: pb2,
            pb3: pb3,
            pb4: pb4,
            pb5: pb5,
            pb6: pb6,
            pl0: pl0,
            pl1: pl1,
            pl2: pl2,
            pl3: pl3,
            pl4: pl4,
            pl5: pl5,
            pl6: pl6,
            px0: px0,
            px1: px1,
            px2: px2,
            px3: px3,
            px4: px4,
            px5: px5,
            px6: px6,
            py0: py0,
            py1: py1,
            py2: py2,
            py3: py3,
            py4: py4,
            py5: py5,
            py6: py6,
            hasTextBlack: hasTextBlack,
            hasTextBlackBis: hasTextBlackBis,
            hasTextBlackTer: hasTextBlackTer,
            hasTextDanger: hasTextDanger,
            hasTextDark: hasTextDark,
            hasTextGrey: hasTextGrey,
            hasTextGreyDark: hasTextGreyDark,
            hasTextGreyDarker: hasTextGreyDarker,
            hasTextGreyLight: hasTextGreyLight,
            hasTextGreyLighter: hasTextGreyLighter,
            hasTextLight: hasTextLight,
            hasTextLink: hasTextLink,
            hasTextInfo: hasTextInfo,
            hasTextPrimary: hasTextPrimary,
            hasTextSuccess: hasTextSuccess,
            hasTextWarning: hasTextWarning,
            hasTextWhite: hasTextWhite,
            hasTextWhiteBis: hasTextWhiteBis,
            hasTextWhiteTer: hasTextWhiteTer,
            isCapitalized: isCapitalized,
            isItalic: isItalic,
            isLowercase: isLowercase,
            isUnderlined: isUnderlined,
            isUppercase: isUppercase,
            hasTextWeightLight: hasTextWeightLight,
            hasTextWeightNormal: hasTextWeightNormal,
            hasTextWeightMedium: hasTextWeightMedium,
            hasTextWeightSemibold: hasTextWeightSemibold,
            hasTextWeightBold: hasTextWeightBold,
            hasTextCentered: hasTextCentered,
            hasTextCenteredDesktop: hasTextCenteredDesktop,
            hasTextCenteredDesktopOnly: hasTextCenteredDesktopOnly,
            hasTextCenteredFullhd: hasTextCenteredFullhd,
            hasTextCenteredMobile: hasTextCenteredMobile,
            hasTextCenteredTablet: hasTextCenteredTablet,
            hasTextCenteredTabletOnly: hasTextCenteredTabletOnly,
            hasTextCenteredTouch: hasTextCenteredTouch,
            hasTextCenteredWidescreen: hasTextCenteredWidescreen,
            hasTextCenteredWidescreenOnly: hasTextCenteredWidescreenOnly,
            hasTextJustified: hasTextJustified,
            hasTextJustifiedDesktop: hasTextJustifiedDesktop,
            hasTextJustifiedDesktopOnly: hasTextJustifiedDesktopOnly,
            hasTextJustifiedFullhd: hasTextJustifiedFullhd,
            hasTextJustifiedMobile: hasTextJustifiedMobile,
            hasTextJustifiedTablet: hasTextJustifiedTablet,
            hasTextJustifiedTabletOnly: hasTextJustifiedTabletOnly,
            hasTextJustifiedTouch: hasTextJustifiedTouch,
            hasTextJustifiedWidescreen: hasTextJustifiedWidescreen,
            hasTextJustifiedWidescreenOnly: hasTextJustifiedWidescreenOnly,
            hasTextLeft: hasTextLeft,
            hasTextLeftDesktop: hasTextLeftDesktop,
            hasTextLeftDesktopOnly: hasTextLeftDesktopOnly,
            hasTextLeftFullhd: hasTextLeftFullhd,
            hasTextLeftMobile: hasTextLeftMobile,
            hasTextLeftTablet: hasTextLeftTablet,
            hasTextLeftTabletOnly: hasTextLeftTabletOnly,
            hasTextLeftTouch: hasTextLeftTouch,
            hasTextLeftWidescreen: hasTextLeftWidescreen,
            hasTextLeftWidescreenOnly: hasTextLeftWidescreenOnly,
            hasTextRight: hasTextRight,
            hasTextRightDesktop: hasTextRightDesktop,
            hasTextRightDesktopOnly: hasTextRightDesktopOnly,
            hasTextRightFullhd: hasTextRightFullhd,
            hasTextRightMobile: hasTextRightMobile,
            hasTextRightTablet: hasTextRightTablet,
            hasTextRightTabletOnly: hasTextRightTabletOnly,
            hasTextRightTouch: hasTextRightTouch,
            hasTextRightWidescreen: hasTextRightWidescreen,
            hasTextRightWidescreenOnly: hasTextRightWidescreenOnly,
            isSize1: isSize1,
            isSize1Mobile: isSize1Mobile,
            isSize1Touch: isSize1Touch,
            isSize1Tablet: isSize1Tablet,
            isSize1Desktop: isSize1Desktop,
            isSize1Widescreen: isSize1Widescreen,
            isSize1Fullhd: isSize1Fullhd,
            isSize2: isSize2,
            isSize2Mobile: isSize2Mobile,
            isSize2Touch: isSize2Touch,
            isSize2Tablet: isSize2Tablet,
            isSize2Desktop: isSize2Desktop,
            isSize2Widescreen: isSize2Widescreen,
            isSize2Fullhd: isSize2Fullhd,
            isSize3: isSize3,
            isSize3Mobile: isSize3Mobile,
            isSize3Touch: isSize3Touch,
            isSize3Tablet: isSize3Tablet,
            isSize3Desktop: isSize3Desktop,
            isSize3Widescreen: isSize3Widescreen,
            isSize3Fullhd: isSize3Fullhd,
            isSize4: isSize4,
            isSize4Mobile: isSize4Mobile,
            isSize4Touch: isSize4Touch,
            isSize4Tablet: isSize4Tablet,
            isSize4Desktop: isSize4Desktop,
            isSize4Widescreen: isSize4Widescreen,
            isSize4Fullhd: isSize4Fullhd,
            isSize5: isSize5,
            isSize5Mobile: isSize5Mobile,
            isSize5Touch: isSize5Touch,
            isSize5Tablet: isSize5Tablet,
            isSize5Desktop: isSize5Desktop,
            isSize5Widescreen: isSize5Widescreen,
            isSize5Fullhd: isSize5Fullhd,
            isSize6: isSize6,
            isSize6Mobile: isSize6Mobile,
            isSize6Touch: isSize6Touch,
            isSize6Tablet: isSize6Tablet,
            isSize6Desktop: isSize6Desktop,
            isSize6Widescreen: isSize6Widescreen,
            isSize6Fullhd: isSize6Fullhd,
            isSize7: isSize7,
            isSize7Mobile: isSize7Mobile,
            isSize7Touch: isSize7Touch,
            isSize7Tablet: isSize7Tablet,
            isSize7Desktop: isSize7Desktop,
            isSize7Widescreen: isSize7Widescreen,
            isSize7Fullhd: isSize7Fullhd,
            isBlock: isBlock,
            isBlockDesktop: isBlockDesktop,
            isBlockDesktopOnly: isBlockDesktopOnly,
            isBlockFullhd: isBlockFullhd,
            isBlockMobile: isBlockMobile,
            isBlockTablet: isBlockTablet,
            isBlockTabletOnly: isBlockTabletOnly,
            isBlockTouch: isBlockTouch,
            isBlockWidescreen: isBlockWidescreen,
            isBlockWidescreenOnly: isBlockWidescreenOnly,
            isFlex: isFlex,
            isFlexDesktop: isFlexDesktop,
            isFlexDesktopOnly: isFlexDesktopOnly,
            isFlexFullhd: isFlexFullhd,
            isFlexMobile: isFlexMobile,
            isFlexTablet: isFlexTablet,
            isFlexTabletOnly: isFlexTabletOnly,
            isFlexTouch: isFlexTouch,
            isFlexWidescreen: isFlexWidescreen,
            isFlexWidescreenOnly: isFlexWidescreenOnly,
            isHidden: isHidden,
            isHiddenDesktop: isHiddenDesktop,
            isHiddenDesktopOnly: isHiddenDesktopOnly,
            isHiddenFullhd: isHiddenFullhd,
            isHiddenMobile: isHiddenMobile,
            isHiddenTablet: isHiddenTablet,
            isHiddenTabletOnly: isHiddenTabletOnly,
            isHiddenTouch: isHiddenTouch,
            isHiddenWidescreen: isHiddenWidescreen,
            isHiddenWidescreenOnly: isHiddenWidescreenOnly,
            isInline: isInline,
            isInlineBlock: isInlineBlock,
            isInlineBlockDesktop: isInlineBlockDesktop,
            isInlineBlockDesktopOnly: isInlineBlockDesktopOnly,
            isInlineBlockFullhd: isInlineBlockFullhd,
            isInlineBlockMobile: isInlineBlockMobile,
            isInlineBlockTablet: isInlineBlockTablet,
            isInlineBlockTabletOnly: isInlineBlockTabletOnly,
            isInlineBlockTouch: isInlineBlockTouch,
            isInlineBlockWidescreen: isInlineBlockWidescreen,
            isInlineBlockWidescreenOnly: isInlineBlockWidescreenOnly,
            isInlineDesktop: isInlineDesktop,
            isInlineDesktopOnly: isInlineDesktopOnly,
            isInlineFlex: isInlineFlex,
            isInlineFlexDesktop: isInlineFlexDesktop,
            isInlineFlexDesktopOnly: isInlineFlexDesktopOnly,
            isInlineFlexFullhd: isInlineFlexFullhd,
            isInlineFlexMobile: isInlineFlexMobile,
            isInlineFlexTablet: isInlineFlexTablet,
            isInlineFlexTabletOnly: isInlineFlexTabletOnly,
            isInlineFlexTouch: isInlineFlexTouch,
            isInlineFlexWidescreen: isInlineFlexWidescreen,
            isInlineFlexWidescreenOnly: isInlineFlexWidescreenOnly,
            isInlineFullhd: isInlineFullhd,
            isInlineMobile: isInlineMobile,
            isInlineTablet: isInlineTablet,
            isInlineTabletOnly: isInlineTabletOnly,
            isInlineTouch: isInlineTouch,
            isInlineWidescreen: isInlineWidescreen,
            isInlineWidescreenOnly: isInlineWidescreenOnly,
            isInvisible: isInvisible,
            isSrOnly: isSrOnly,
        },
        props,
    ];
}
exports.extractModifiersProps = extractModifiersProps;
