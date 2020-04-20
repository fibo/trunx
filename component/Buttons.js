Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Buttons = (function (_super) {
    tslib_1.__extends(Buttons, _super);
    function Buttons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Buttons.prototype.render = function () {
        var _a = this.props, areLarge = _a.areLarge, areMedium = _a.areMedium, areSmall = _a.areSmall, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["areLarge", "areMedium", "areSmall", "children", "className"]);
        return (React.createElement("div", { className: classnames("buttons", className, {
                "are-large": areLarge,
                "are-medium": areMedium,
                "are-small": areSmall,
            }, modifiers_1.helpersPropsToClassnames(props), modifiers_1.textColorHelpersPropsToClassnames(props)) }, children));
    };
    return Buttons;
}(React.Component));
exports.default = Buttons;
