Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function alignementPropsToClassnames(props) {
    var hasTextCentered = props.hasTextCentered, hasTextJustified = props.hasTextJustified, hasTextLeft = props.hasTextLeft, hasTextRight = props.hasTextRight;
    return {
        "has-text-centered": hasTextCentered,
        "has-text-justified": hasTextJustified,
        "has-text-left": hasTextLeft,
        "has-text-right": hasTextRight,
    };
}
exports.alignementPropsToClassnames = alignementPropsToClassnames;
function backgroundColorHelpersPropsToClassnames(props) {
    var hasBackgroundBlack = props.hasBackgroundBlack, hasBackgroundBlackBis = props.hasBackgroundBlackBis, hasBackgroundBlackTer = props.hasBackgroundBlackTer, hasBackgroundDanger = props.hasBackgroundDanger, hasBackgroundDark = props.hasBackgroundDark, hasBackgroundGrey = props.hasBackgroundGrey, hasBackgroundGreyDark = props.hasBackgroundGreyDark, hasBackgroundGreyDarker = props.hasBackgroundGreyDarker, hasBackgroundGreyLight = props.hasBackgroundGreyLight, hasBackgroundGreyLighter = props.hasBackgroundGreyLighter, hasBackgroundInfo = props.hasBackgroundInfo, hasBackgroundLight = props.hasBackgroundLight, hasBackgroundLink = props.hasBackgroundLink, hasBackgroundPrimary = props.hasBackgroundPrimary, hasBackgroundSuccess = props.hasBackgroundSuccess, hasBackgroundWarning = props.hasBackgroundWarning, hasBackgroundWhite = props.hasBackgroundWhite, hasBackgroundWhiteBis = props.hasBackgroundWhiteBis, hasBackgroundWhiteTer = props.hasBackgroundWhiteTer;
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
    };
}
exports.backgroundColorHelpersPropsToClassnames = backgroundColorHelpersPropsToClassnames;
function floatHelpersPropsToClassnames(props) {
    var isClearfix = props.isClearfix, isPulledLeft = props.isPulledLeft, isPulledRight = props.isPulledRight;
    return {
        "is-clearfix": isClearfix,
        "is-pulled-left": isPulledLeft,
        "is-pulled-right": isPulledRight,
    };
}
exports.floatHelpersPropsToClassnames = floatHelpersPropsToClassnames;
function helpersPropsToClassnames(props) {
    var isInvisible = props.isInvisible, isMarginLess = props.isMarginLess, isPaddingLess = props.isPaddingLess, isSrOnly = props.isSrOnly;
    return {
        "is-marginless": isMarginLess,
        "is-invisible": isInvisible,
        "is-paddingless": isPaddingLess,
        "is-sr-only": isSrOnly,
    };
}
exports.helpersPropsToClassnames = helpersPropsToClassnames;
function mainColorsPropsToClassnames(props) {
    var isDanger = props.isDanger, isInfo = props.isInfo, isLink = props.isLink, isPrimary = props.isPrimary, isSuccess = props.isSuccess, isWarning = props.isWarning;
    return {
        "is-danger": isDanger,
        "is-info": isInfo,
        "is-link": isLink,
        "is-primary": isPrimary,
        "is-success": isSuccess,
        "is-warning": isWarning,
    };
}
exports.mainColorsPropsToClassnames = mainColorsPropsToClassnames;
function shadeColorsPropsToClassnames(props) {
    var isBlack = props.isBlack, isDark = props.isDark, isLight = props.isLight, isWhite = props.isWhite;
    return {
        "is-black": isBlack,
        "is-dark": isDark,
        "is-light": isLight,
        "is-white": isWhite,
    };
}
exports.shadeColorsPropsToClassnames = shadeColorsPropsToClassnames;
function sizePropsToClassnames(props) {
    var isLarge = props.isLarge, isMedium = props.isMedium, isSmall = props.isSmall;
    return {
        "is-large": isLarge,
        "is-medium": isMedium,
        "is-small": isSmall,
    };
}
exports.sizePropsToClassnames = sizePropsToClassnames;
function textColorHelpersPropsToClassnames(props) {
    var hasTextBlack = props.hasTextBlack, hasTextBlackBis = props.hasTextBlackBis, hasTextBlackTer = props.hasTextBlackTer, hasTextDanger = props.hasTextDanger, hasTextDark = props.hasTextDark, hasTextGrey = props.hasTextGrey, hasTextGreyDark = props.hasTextGreyDark, hasTextGreyDarker = props.hasTextGreyDarker, hasTextGreyLight = props.hasTextGreyLight, hasTextGreyLighter = props.hasTextGreyLighter, hasTextInfo = props.hasTextInfo, hasTextLight = props.hasTextLight, hasTextLink = props.hasTextLink, hasTextPrimary = props.hasTextPrimary, hasTextSuccess = props.hasTextSuccess, hasTextWarning = props.hasTextWarning, hasTextWhite = props.hasTextWhite, hasTextWhiteBis = props.hasTextWhiteBis, hasTextWhiteTer = props.hasTextWhiteTer;
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
    };
}
exports.textColorHelpersPropsToClassnames = textColorHelpersPropsToClassnames;
function extractModifiersProps(_a) {
    var hasTextCentered = _a.hasTextCentered, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextRight = _a.hasTextRight, hasBackgroundBlack = _a.hasBackgroundBlack, hasBackgroundBlackBis = _a.hasBackgroundBlackBis, hasBackgroundBlackTer = _a.hasBackgroundBlackTer, hasBackgroundDanger = _a.hasBackgroundDanger, hasBackgroundDark = _a.hasBackgroundDark, hasBackgroundGrey = _a.hasBackgroundGrey, hasBackgroundGreyDark = _a.hasBackgroundGreyDark, hasBackgroundGreyDarker = _a.hasBackgroundGreyDarker, hasBackgroundGreyLight = _a.hasBackgroundGreyLight, hasBackgroundGreyLighter = _a.hasBackgroundGreyLighter, hasBackgroundLight = _a.hasBackgroundLight, hasBackgroundLink = _a.hasBackgroundLink, hasBackgroundInfo = _a.hasBackgroundInfo, hasBackgroundPrimary = _a.hasBackgroundPrimary, hasBackgroundSuccess = _a.hasBackgroundSuccess, hasBackgroundWarning = _a.hasBackgroundWarning, hasBackgroundWhite = _a.hasBackgroundWhite, hasBackgroundWhiteBis = _a.hasBackgroundWhiteBis, hasBackgroundWhiteTer = _a.hasBackgroundWhiteTer, isClearfix = _a.isClearfix, isPulledLeft = _a.isPulledLeft, isPulledRight = _a.isPulledRight, isInvisible = _a.isInvisible, isMarginLess = _a.isMarginLess, isPaddingLess = _a.isPaddingLess, isSrOnly = _a.isSrOnly, isDanger = _a.isDanger, isInfo = _a.isInfo, isLink = _a.isLink, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isBlack = _a.isBlack, isDark = _a.isDark, isLight = _a.isLight, isWhite = _a.isWhite, isLarge = _a.isLarge, isMedium = _a.isMedium, isSmall = _a.isSmall, hasTextBlack = _a.hasTextBlack, hasTextBlackBis = _a.hasTextBlackBis, hasTextBlackTer = _a.hasTextBlackTer, hasTextDanger = _a.hasTextDanger, hasTextDark = _a.hasTextDark, hasTextGrey = _a.hasTextGrey, hasTextGreyDark = _a.hasTextGreyDark, hasTextGreyDarker = _a.hasTextGreyDarker, hasTextGreyLight = _a.hasTextGreyLight, hasTextGreyLighter = _a.hasTextGreyLighter, hasTextLight = _a.hasTextLight, hasTextLink = _a.hasTextLink, hasTextInfo = _a.hasTextInfo, hasTextPrimary = _a.hasTextPrimary, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, hasTextWhite = _a.hasTextWhite, hasTextWhiteBis = _a.hasTextWhiteBis, hasTextWhiteTer = _a.hasTextWhiteTer, props = tslib_1.__rest(_a, ["hasTextCentered", "hasTextJustified", "hasTextLeft", "hasTextRight", "hasBackgroundBlack", "hasBackgroundBlackBis", "hasBackgroundBlackTer", "hasBackgroundDanger", "hasBackgroundDark", "hasBackgroundGrey", "hasBackgroundGreyDark", "hasBackgroundGreyDarker", "hasBackgroundGreyLight", "hasBackgroundGreyLighter", "hasBackgroundLight", "hasBackgroundLink", "hasBackgroundInfo", "hasBackgroundPrimary", "hasBackgroundSuccess", "hasBackgroundWarning", "hasBackgroundWhite", "hasBackgroundWhiteBis", "hasBackgroundWhiteTer", "isClearfix", "isPulledLeft", "isPulledRight", "isInvisible", "isMarginLess", "isPaddingLess", "isSrOnly", "isDanger", "isInfo", "isLink", "isPrimary", "isSuccess", "isWarning", "isBlack", "isDark", "isLight", "isWhite", "isLarge", "isMedium", "isSmall", "hasTextBlack", "hasTextBlackBis", "hasTextBlackTer", "hasTextDanger", "hasTextDark", "hasTextGrey", "hasTextGreyDark", "hasTextGreyDarker", "hasTextGreyLight", "hasTextGreyLighter", "hasTextLight", "hasTextLink", "hasTextInfo", "hasTextPrimary", "hasTextSuccess", "hasTextWarning", "hasTextWhite", "hasTextWhiteBis", "hasTextWhiteTer"]);
    return ([
        {
            alignementHelpersProps: {
                hasTextCentered: hasTextCentered,
                hasTextJustified: hasTextJustified,
                hasTextLeft: hasTextLeft,
                hasTextRight: hasTextRight,
            },
            backgroundColorHelpersProps: {
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
                hasBackgroundLight: hasBackgroundLight,
                hasBackgroundLink: hasBackgroundLink,
                hasBackgroundInfo: hasBackgroundInfo,
                hasBackgroundPrimary: hasBackgroundPrimary,
                hasBackgroundSuccess: hasBackgroundSuccess,
                hasBackgroundWarning: hasBackgroundWarning,
                hasBackgroundWhite: hasBackgroundWhite,
                hasBackgroundWhiteBis: hasBackgroundWhiteBis,
                hasBackgroundWhiteTer: hasBackgroundWhiteTer,
            },
            floatHelpersProps: {
                isClearfix: isClearfix,
                isPulledLeft: isPulledLeft,
                isPulledRight: isPulledRight,
            },
            helpersProps: {
                isInvisible: isInvisible,
                isMarginLess: isMarginLess,
                isPaddingLess: isPaddingLess,
                isSrOnly: isSrOnly,
            },
            mainColorsHelperProps: {
                isDanger: isDanger,
                isInfo: isInfo,
                isLink: isLink,
                isPrimary: isPrimary,
                isSuccess: isSuccess,
                isWarning: isWarning,
            },
            shadeColorsHelperProps: {
                isBlack: isBlack,
                isDark: isDark,
                isLight: isLight,
                isWhite: isWhite,
            },
            sizeProps: {
                isLarge: isLarge,
                isMedium: isMedium,
                isSmall: isSmall,
            },
            textColorHelpersProps: {
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
            },
        },
        props
    ]);
}
exports.extractModifiersProps = extractModifiersProps;
