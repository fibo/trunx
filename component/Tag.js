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
        var _a = this.props, children = _a.children, classNameProp = _a.className, href = _a.href, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isDelete = _a.isDelete, isInfo = _a.isInfo, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isMedium = _a.isMedium, isNormal = _a.isNormal, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isWhite = _a.isWhite, onClick = _a.onClick, target = _a.target, props = tslib_1.__rest(_a, ["children", "className", "href", "isBlack", "isDanger", "isDark", "isDelete", "isInfo", "isLarge", "isLight", "isLink", "isMedium", "isNormal", "isPrimary", "isRounded", "isSuccess", "isWarning", "isWhite", "onClick", "target"]);
        var className = classnames("tag", classNameProp, {
            "is-delete": isDelete,
            "is-light": isLight,
            "is-normal": isNormal,
            "is-rounded": isRounded,
        }, modifiers_1.mainColorsPropsToClassnames({
            isDanger: isDanger,
            isInfo: isInfo,
            isLink: isLink,
            isPrimary: isPrimary,
            isSuccess: isSuccess,
            isWarning: isWarning,
        }), modifiers_1.shadeColorsPropsToClassnames({
            isBlack: isBlack,
            isDark: isDark,
            isLight: isLight,
            isWhite: isWhite,
        }), modifiers_1.sizePropsToClassnames({
            isLarge: isLarge,
            isMedium: isMedium,
        }));
        if (href || onClick) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, href: href, onClick: onClick, target: target }), children));
        }
        else {
            return (React.createElement("span", tslib_1.__assign({}, props, { className: className }), children));
        }
    };
    return Tag;
}(React.Component));
exports.default = Tag;
