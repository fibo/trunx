Object.defineProperty(exports, "__esModule", { value: true });
function helpersPropsToClassenames(props) {
    var isInvisible = props.isInvisible, isSrOnly = props.isSrOnly;
    return {
        "is-invisible": isInvisible,
        "is-sr-only": isSrOnly,
    };
}
exports.helpersPropsToClassenames = helpersPropsToClassenames;
function mainColorsPropsToClassenames(props) {
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
exports.mainColorsPropsToClassenames = mainColorsPropsToClassenames;
function shadeColorsPropsToClassenames(props) {
    var isBlack = props.isBlack, isDark = props.isDark, isLight = props.isLight, isWhite = props.isWhite;
    return {
        "is-black": isBlack,
        "is-dark": isDark,
        "is-light": isLight,
        "is-white": isWhite,
    };
}
exports.shadeColorsPropsToClassenames = shadeColorsPropsToClassenames;
function sizePropsToClassenames(props) {
    var isLarge = props.isLarge, isMedium = props.isMedium, isSmall = props.isSmall;
    return {
        "is-large": isLarge,
        "is-medium": isMedium,
        "is-small": isSmall,
    };
}
exports.sizePropsToClassenames = sizePropsToClassenames;
function textColorHelpersPropsToClassenames(props) {
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
exports.textColorHelpersPropsToClassenames = textColorHelpersPropsToClassenames;
