Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Progress = (function (_super) {
    tslib_1.__extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, isBlack = _a.isBlack, isDanger = _a.isDanger, isDark = _a.isDark, isInfo = _a.isInfo, isLarge = _a.isLarge, isLight = _a.isLight, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, isWhite = _a.isWhite, props = tslib_1.__rest(_a, ["isBlack", "isDanger", "isDark", "isInfo", "isLarge", "isLight", "isLink", "isMedium", "isPrimary", "isSmall", "isSuccess", "isWarning", "isWhite"]);
        var className = classnames("progress", modifiers_1.mainColorsPropsToClassnames({
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
            isSmall: isSmall,
        }));
        return (React.createElement("progress", tslib_1.__assign({}, props, { className: className }), this.props.children));
    };
    return Progress;
}(React.Component));
exports.default = Progress;
