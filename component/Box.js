Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Box = (function (_super) {
    tslib_1.__extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), _b = _a[0], backgroundColorHelpersProps = _b.backgroundColorHelpersProps, textColorHelpersProps = _b.textColorHelpersProps, _c = _a[1], children = _c.children, className = _c.className, props = tslib_1.__rest(_c, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("box", className, modifiers_1.backgroundColorHelpersPropsToClassnames(backgroundColorHelpersProps), modifiers_1.textColorHelpersPropsToClassnames(textColorHelpersProps)) }, props), children));
    };
    return Box;
}(React.Component));
exports.default = Box;
