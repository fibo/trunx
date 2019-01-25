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
        var _a = this.props, isDanger = _a.isDanger, isInfo = _a.isInfo, isLarge = _a.isLarge, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, props = tslib_1.__rest(_a, ["isDanger", "isInfo", "isLarge", "isMedium", "isPrimary", "isSmall", "isSuccess", "isWarning"]);
        var className = classnames("progress", modifiers_1.mainColorsPropsToClassenames({
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
        return (React.createElement("progress", tslib_1.__assign({}, props, { className: className }), this.props.children));
    };
    return Progress;
}(React.Component));
exports.default = Progress;
