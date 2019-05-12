Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Span = (function (_super) {
    tslib_1.__extends(Span, _super);
    function Span() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Span.prototype.render = function () {
        var _a = this.props, hasBackgroundBlack = _a.hasBackgroundBlack, hasBackgroundBlackBis = _a.hasBackgroundBlackBis, hasBackgroundBlackTer = _a.hasBackgroundBlackTer, hasBackgroundDanger = _a.hasBackgroundDanger, hasBackgroundDark = _a.hasBackgroundDark, hasBackgroundGrey = _a.hasBackgroundGrey, hasBackgroundGreyDark = _a.hasBackgroundGreyDark, hasBackgroundGreyDarker = _a.hasBackgroundGreyDarker, hasBackgroundGreyLight = _a.hasBackgroundGreyLight, hasBackgroundGreyLighter = _a.hasBackgroundGreyLighter, hasBackgroundInfo = _a.hasBackgroundInfo, hasBackgroundLight = _a.hasBackgroundLight, hasBackgroundLink = _a.hasBackgroundLink, hasBackgroundPrimary = _a.hasBackgroundPrimary, hasBackgroundSuccess = _a.hasBackgroundSuccess, hasBackgroundWarning = _a.hasBackgroundWarning, hasBackgroundWhite = _a.hasBackgroundWhite, hasBackgroundWhiteBis = _a.hasBackgroundWhiteBis, hasBackgroundWhiteTer = _a.hasBackgroundWhiteTer, hasTextBlack = _a.hasTextBlack, hasTextBlackBis = _a.hasTextBlackBis, hasTextBlackTer = _a.hasTextBlackTer, hasTextCentered = _a.hasTextCentered, hasTextDanger = _a.hasTextDanger, hasTextDark = _a.hasTextDark, hasTextGrey = _a.hasTextGrey, hasTextGreyDark = _a.hasTextGreyDark, hasTextGreyDarker = _a.hasTextGreyDarker, hasTextGreyLight = _a.hasTextGreyLight, hasTextGreyLighter = _a.hasTextGreyLighter, hasTextInfo = _a.hasTextInfo, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextLight = _a.hasTextLight, hasTextLink = _a.hasTextLink, hasTextPrimary = _a.hasTextPrimary, hasTextRight = _a.hasTextRight, hasTextSuccess = _a.hasTextSuccess, hasTextWarning = _a.hasTextWarning, hasTextWhite = _a.hasTextWhite, hasTextWhiteBis = _a.hasTextWhiteBis, hasTextWhiteTer = _a.hasTextWhiteTer, props = tslib_1.__rest(_a, ["hasBackgroundBlack", "hasBackgroundBlackBis", "hasBackgroundBlackTer", "hasBackgroundDanger", "hasBackgroundDark", "hasBackgroundGrey", "hasBackgroundGreyDark", "hasBackgroundGreyDarker", "hasBackgroundGreyLight", "hasBackgroundGreyLighter", "hasBackgroundInfo", "hasBackgroundLight", "hasBackgroundLink", "hasBackgroundPrimary", "hasBackgroundSuccess", "hasBackgroundWarning", "hasBackgroundWhite", "hasBackgroundWhiteBis", "hasBackgroundWhiteTer", "hasTextBlack", "hasTextBlackBis", "hasTextBlackTer", "hasTextCentered", "hasTextDanger", "hasTextDark", "hasTextGrey", "hasTextGreyDark", "hasTextGreyDarker", "hasTextGreyLight", "hasTextGreyLighter", "hasTextInfo", "hasTextJustified", "hasTextLeft", "hasTextLight", "hasTextLink", "hasTextPrimary", "hasTextRight", "hasTextSuccess", "hasTextWarning", "hasTextWhite", "hasTextWhiteBis", "hasTextWhiteTer"]);
        var className = classnames(modifiers_1.alignementPropsToClassenames({
            hasTextCentered: hasTextCentered,
            hasTextJustified: hasTextJustified,
            hasTextLeft: hasTextLeft,
            hasTextRight: hasTextRight,
        }), modifiers_1.backgroundColorHelpersPropsToClassenames({
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
        return (React.createElement("span", tslib_1.__assign({}, props, { className: className }), this.props.children));
    };
    return Span;
}(React.Component));
exports.default = Span;
