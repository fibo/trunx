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
        var _a = modifiers_1.extractModifiersProps(this.props), _b = _a[0], helpersProps = _b.helpersProps, textColorHelpersProps = _b.textColorHelpersProps, _c = _a[1], areLarge = _c.areLarge, areMedium = _c.areMedium, areSmall = _c.areSmall, children = _c.children, className = _c.className, props = tslib_1.__rest(_c, ["areLarge", "areMedium", "areSmall", "children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("buttons", className, {
                "are-large": areLarge,
                "are-medium": areMedium,
                "are-small": areSmall,
            }, modifiers_1.helpersPropsToClassnames(helpersProps), modifiers_1.textColorHelpersPropsToClassnames(textColorHelpersProps)) }, props), children));
    };
    return Buttons;
}(React.Component));
exports.default = Buttons;
