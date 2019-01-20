Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Anchor_1 = require("./Anchor");
var modifiers_1 = require("./modifiers");
var Tag = (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, AnchorComponent = _a.AnchorComponent, href = _a.href, hrefProp = _a.hrefProp, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isInfo = _a.isInfo, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isWhite = _a.isWhite, props = tslib_1.__rest(_a, ["AnchorComponent", "href", "hrefProp", "isBlack", "isDanger", "isDark", "isInfo", "isLarge", "isLight", "isLink", "isMedium", "isPrimary", "isRounded", "isSmall", "isSuccess", "isWarning", "isWhite"]);
        var className = classnames("tag", {
            "is-black": isBlack,
            "is-dark": isDark,
            "is-light": isLight,
            "is-link": isLink,
            "is-rounded": isRounded,
            "is-white": isWhite,
        }, modifiers_1.mainColorsPropsToClassenames({
            isDanger: isDanger,
            isInfo: isInfo,
            isPrimary: isPrimary,
            isSuccess: isSuccess,
            isWarning: isWarning,
        }), modifiers_1.sizePropsToClassenames({
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
        }));
        return href ? (React.createElement(Anchor_1.Anchor, tslib_1.__assign({ AnchorComponent: AnchorComponent, className: className, href: href, hrefProp: hrefProp }, props), this.props.children)) : (React.createElement("span", { className: className }, this.props.children));
    };
    return Tag;
}(React.Component));
exports.default = Tag;
