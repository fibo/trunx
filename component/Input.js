Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Input = (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, inputRef = _a.inputRef, isDanger = _a.isDanger, isFocused = _a.isFocused, isHovered = _a.isHovered, isInfo = _a.isInfo, isLarge = _a.isLarge, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isRounded = _a.isRounded, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isStatic = _a.isStatic, isWarning = _a.isWarning, type = _a.type, props = tslib_1.__rest(_a, ["inputRef", "isDanger", "isFocused", "isHovered", "isInfo", "isLarge", "isMedium", "isPrimary", "isRounded", "isSmall", "isSuccess", "isStatic", "isWarning", "type"]);
        var className = classnames("input", {
            "is-focused": isFocused,
            "is-hovered": isHovered,
            "is-rounded": isRounded,
            "is-static": isStatic,
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
        return (React.createElement("input", tslib_1.__assign({ className: className, ref: inputRef, type: type }, props)));
    };
    return Input;
}(React.Component));
exports.default = Input;
