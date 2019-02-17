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
        var _a = this.props, href = _a.href, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isInfo = _a.isInfo, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isWhite = _a.isWhite, onClick = _a.onClick, target = _a.target, props = tslib_1.__rest(_a, ["href", "isBlack", "isDanger", "isDark", "isInfo", "isLarge", "isLight", "isLink", "isMedium", "isPrimary", "isRounded", "isSmall", "isSuccess", "isWarning", "isWhite", "onClick", "target"]);
        var className = classnames("tag", {
            "is-black": isBlack,
            "is-dark": isDark,
            "is-light": isLight,
            "is-rounded": isRounded,
            "is-white": isWhite,
        }, modifiers_1.mainColorsPropsToClassenames({
            isDanger: isDanger,
            isInfo: isInfo,
            isLink: isLink,
            isPrimary: isPrimary,
            isSuccess: isSuccess,
            isWarning: isWarning,
        }), modifiers_1.shadeColorsPropsToClassenames({
            isBlack: isBlack,
            isDark: isDark,
            isLight: isLight,
            isWhite: isWhite,
        }), modifiers_1.sizePropsToClassenames({
            isLarge: isLarge,
            isMedium: isMedium,
            isSmall: isSmall,
        }));
        if (href || onClick) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, href: href, onClick: onClick, target: target }), this.props.children));
        }
        else {
            return (React.createElement("span", tslib_1.__assign({}, props, { className: className }), this.props.children));
        }
    };
    return Tag;
}(React.Component));
exports.default = Tag;
