Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classNames_1 = require("./classNames");
function modifierPropsToClassnamesObject(props) {
    return classNames_1.trunxPropsToClassnamesObject(props);
}
exports.modifierPropsToClassnamesObject = modifierPropsToClassnamesObject;
function extractModifiersProps(_a) {
    var hasTextCentered = _a.hasTextCentered, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextRight = _a.hasTextRight, hasBackgroundBlack = _a.hasBackgroundBlack, hasBackgroundBlackBis = _a.hasBackgroundBlackBis, hasBackgroundBlackTer = _a.hasBackgroundBlackTer, hasBackgroundDanger = _a.hasBackgroundDanger, hasBackgroundDark = _a.hasBackgroundDark, hasBackgroundGrey = _a.hasBackgroundGrey, hasBackgroundGreyDark = _a.hasBackgroundGreyDark, hasBackgroundGreyDarker = _a.hasBackgroundGreyDarker, hasBackgroundGreyLight = _a.hasBackgroundGreyLight, hasBackgroundGreyLighter = _a.hasBackgroundGreyLighter, hasBackgroundLight = _a.hasBackgroundLight, hasBackgroundLink = _a.hasBackgroundLink, hasBackgroundInfo = _a.hasBackgroundInfo, hasBackgroundPrimary = _a.hasBackgroundPrimary, hasBackgroundSuccess = _a.hasBackgroundSuccess, hasBackgroundWarning = _a.hasBackgroundWarning, hasBackgroundWhite = _a.hasBackgroundWhite, hasBackgroundWhiteBis = _a.hasBackgroundWhiteBis, hasBackgroundWhiteTer = _a.hasBackgroundWhiteTer, isClearfix = _a.isClearfix, isPulledLeft = _a.isPulledLeft, isPulledRight = _a.isPulledRight, isInvisible = _a.isInvisible, isMarginLess = _a.isMarginLess, isPaddingLess = _a.isPaddingLess, isSrOnly = _a.isSrOnly, isClickable = _a.isClickable, isRadiusLess = _a.isRadiusLess, isShadowLess = _a.isShadowLess, isUnselectable = _a.isUnselectable, isDanger = _a.isDanger, isInfo = _a.isInfo, isLink = _a.isLink, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isBlack = _a.isBlack, isDark = _a.isDark, isLight = _a.isLight, isWhite = _a.isWhite, isLarge = _a.isLarge, isMedium = _a.isMedium, isSmall = _a.isSmall, hasTextBlack = _a.hasTextBlack, hasTextBlackBis = _a.hasTextBlackBis, hasTextBlackTer = _a.hasTextBlackTer, hasTextDanger = _a.hasTextDanger, hasTextDark = _a.hasTextDark, hasTextGrey = _a.hasTextGrey, hasTextGreyDark = _a.hasTextGreyDark, hasTextGreyDarker = _a.hasTextGreyDarker, hasTextGreyLight = _a.hasTextGreyLight, hasTextGreyLighter = _a.hasTextGreyLighter, hasTextLight = _a.hasTextLight, hasTextLink = _a.hasTextLink, hasTextInfo = _a.hasTextInfo, hasTextPrimary = _a.hasTextPrimary, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, hasTextWhite = _a.hasTextWhite, hasTextWhiteBis = _a.hasTextWhiteBis, hasTextWhiteTer = _a.hasTextWhiteTer, props = tslib_1.__rest(_a, ["hasTextCentered", "hasTextJustified", "hasTextLeft", "hasTextRight", "hasBackgroundBlack", "hasBackgroundBlackBis", "hasBackgroundBlackTer", "hasBackgroundDanger", "hasBackgroundDark", "hasBackgroundGrey", "hasBackgroundGreyDark", "hasBackgroundGreyDarker", "hasBackgroundGreyLight", "hasBackgroundGreyLighter", "hasBackgroundLight", "hasBackgroundLink", "hasBackgroundInfo", "hasBackgroundPrimary", "hasBackgroundSuccess", "hasBackgroundWarning", "hasBackgroundWhite", "hasBackgroundWhiteBis", "hasBackgroundWhiteTer", "isClearfix", "isPulledLeft", "isPulledRight", "isInvisible", "isMarginLess", "isPaddingLess", "isSrOnly", "isClickable", "isRadiusLess", "isShadowLess", "isUnselectable", "isDanger", "isInfo", "isLink", "isPrimary", "isSuccess", "isWarning", "isBlack", "isDark", "isLight", "isWhite", "isLarge", "isMedium", "isSmall", "hasTextBlack", "hasTextBlackBis", "hasTextBlackTer", "hasTextDanger", "hasTextDark", "hasTextGrey", "hasTextGreyDark", "hasTextGreyDarker", "hasTextGreyLight", "hasTextGreyLighter", "hasTextLight", "hasTextLink", "hasTextInfo", "hasTextPrimary", "hasTextSuccess", "hasTextWarning", "hasTextWhite", "hasTextWhiteBis", "hasTextWhiteTer"]);
    return [
        {
            hasTextCentered: hasTextCentered,
            hasTextJustified: hasTextJustified,
            hasTextLeft: hasTextLeft,
            hasTextRight: hasTextRight,
            hasBackgroundBlack: hasBackgroundBlack,
            hasBackgroundBlackBis: hasBackgroundBlackBis,
            hasBackgroundBlackTer: hasBackgroundBlackTer,
            hasBackgroundDanger: hasBackgroundDanger,
            hasBackgroundDark: hasBackgroundDark,
            hasBackgroundGrey: hasBackgroundGrey,
            hasBackgroundGreyDark: hasBackgroundGreyDark,
            hasBackgroundGreyDarker: hasBackgroundGreyDarker,
            hasBackgroundGreyLight: hasBackgroundGreyLight,
            hasBackgroundGreyLighter: hasBackgroundGreyLighter,
            hasBackgroundInfo: hasBackgroundInfo,
            hasBackgroundLight: hasBackgroundLight,
            hasBackgroundLink: hasBackgroundLink,
            hasBackgroundPrimary: hasBackgroundPrimary,
            hasBackgroundSuccess: hasBackgroundSuccess,
            hasBackgroundWarning: hasBackgroundWarning,
            hasBackgroundWhite: hasBackgroundWhite,
            hasBackgroundWhiteBis: hasBackgroundWhiteBis,
            hasBackgroundWhiteTer: hasBackgroundWhiteTer,
            isClearfix: isClearfix,
            isPulledLeft: isPulledLeft,
            isPulledRight: isPulledRight,
            isInvisible: isInvisible,
            isMarginLess: isMarginLess,
            isPaddingLess: isPaddingLess,
            isSrOnly: isSrOnly,
            isClickable: isClickable,
            isRadiusLess: isRadiusLess,
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
            hasTextWhiteTer: hasTextWhiteTer
        },
        props
    ];
}
exports.extractModifiersProps = extractModifiersProps;
