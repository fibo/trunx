Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Control = (function (_super) {
    tslib_1.__extends(Control, _super);
    function Control() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Control.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), sizeProps = _a[0].sizeProps, _b = _a[1], children = _b.children, className = _b.className, hasIconsLeft = _b.hasIconsLeft, hasIconsRight = _b.hasIconsRight, isExpanded = _b.isExpanded, isLoading = _b.isLoading, props = tslib_1.__rest(_b, ["children", "className", "hasIconsLeft", "hasIconsRight", "isExpanded", "isLoading"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("control", className, {
                "has-icons-left": hasIconsLeft,
                "has-icons-right": hasIconsRight,
                "is-expanded": isExpanded,
                "is-loading": isLoading,
            }, modifiers_1.sizePropsToClassnames(sizeProps)) }, props), children));
    };
    return Control;
}(React.Component));
exports.default = Control;
