Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Anchor_1 = require("./Anchor");
var modifiers_1 = require("./modifiers");
var Button = (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a = this.props, AnchorComponent = _a.AnchorComponent, disabled = _a.disabled, hasTextBlack = _a.hasTextBlack, hasTextBlackBis = _a.hasTextBlackBis, hasTextBlackTer = _a.hasTextBlackTer, hasTextDanger = _a.hasTextDanger, hasTextDark = _a.hasTextDark, hasTextGrey = _a.hasTextGrey, hasTextGreyDark = _a.hasTextGreyDark, hasTextGreyDarker = _a.hasTextGreyDarker, hasTextGreyLight = _a.hasTextGreyLight, hasTextGreyLighter = _a.hasTextGreyLighter, hasTextInfo = _a.hasTextInfo, hasTextLight = _a.hasTextLight, hasTextLink = _a.hasTextLink, hasTextPrimary = _a.hasTextPrimary, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, hasTextWhite = _a.hasTextWhite, hasTextWhiteBis = _a.hasTextWhiteBis, hasTextWhiteTer = _a.hasTextWhiteTer, href = _a.href, hrefProp = _a.hrefProp, isActive = _a.isActive, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isFocused = _a.isFocused, isFullwidth = _a.isFullwidth, isInfo = _a.isInfo, isInverted = _a.isInverted, isInvisible = _a.isInvisible, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isLoading = _a.isLoading, isMedium = _a.isMedium, isNormal = _a.isNormal, isOutlined = _a.isOutlined, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSrOnly = _a.isSrOnly, isSuccess = _a.isSuccess, isRounded = _a.isRounded, isStatic = _a.isStatic, isText = _a.isText, isWarning = _a.isWarning, isWhite = _a.isWhite, onClick = _a.onClick, type = _a.type, value = _a.value, props = tslib_1.__rest(_a, ["AnchorComponent", "disabled", "hasTextBlack", "hasTextBlackBis", "hasTextBlackTer", "hasTextDanger", "hasTextDark", "hasTextGrey", "hasTextGreyDark", "hasTextGreyDarker", "hasTextGreyLight", "hasTextGreyLighter", "hasTextInfo", "hasTextLight", "hasTextLink", "hasTextPrimary", "hasTextSuccess", "hasTextWarning", "hasTextWhite", "hasTextWhiteBis", "hasTextWhiteTer", "href", "hrefProp", "isActive", "isBlack", "isDanger", "isDark", "isFocused", "isFullwidth", "isInfo", "isInverted", "isInvisible", "isLarge", "isLight", "isLink", "isLoading", "isMedium", "isNormal", "isOutlined", "isPrimary", "isSmall", "isSrOnly", "isSuccess", "isRounded", "isStatic", "isText", "isWarning", "isWhite", "onClick", "type", "value"]);
        var className = classnames("button", {
            "is-active": isActive,
            "is-black": isBlack,
            "is-dark": isDark,
            "is-focused": isFocused,
            "is-fullwidth": isFullwidth,
            "is-inverted": isInverted,
            "is-light": isLight,
            "is-link": isLink,
            "is-loading": isLoading,
            "is-normal": isNormal,
            "is-outlined": isOutlined,
            "is-rounded": isRounded,
            "is-static": isStatic,
            "is-text": isText,
            "is-white": isWhite,
        }, modifiers_1.helpersPropsToClassenames({
            isInvisible: isInvisible,
            isSrOnly: isSrOnly,
        }), modifiers_1.mainColorsPropsToClassenames({
            isDanger: isDanger,
            isInfo: isInfo,
            isPrimary: isPrimary,
            isSuccess: isSuccess,
            isWarning: isWarning,
        }), modifiers_1.sizePropsToClassenames({
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
        }), modifiers_1.textColorHelpersPropsToClassenames({
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
            hasTextInfo: hasTextInfo,
            hasTextLight: hasTextLight,
            hasTextLink: hasTextLink,
            hasTextPrimary: hasTextPrimary,
            hasTextSuccess: hasTextSuccess,
            hasTextWarning: hasTextWarning,
            hasTextWhite: hasTextWhite,
            hasTextWhiteBis: hasTextWhiteBis,
            hasTextWhiteTer: hasTextWhiteTer,
        }));
        if (href) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({ AnchorComponent: AnchorComponent, className: className, href: href, hrefProp: hrefProp }, props), this.props.children));
        }
        if (type) {
            if (isLoading) {
                return (React.createElement("button", { className: className }, value));
            }
            else {
                return (React.createElement("input", tslib_1.__assign({ className: className, type: type, value: value }, props)));
            }
        }
        return (React.createElement("button", tslib_1.__assign({ className: className, disabled: disabled, onClick: onClick }, props), this.props.children));
    };
    return Button;
}(React.Component));
exports.default = Button;
