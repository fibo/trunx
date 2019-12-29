Object.defineProperty(exports, "__esModule", { value: true });
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
