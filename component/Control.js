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
        var _a = this.props, children = _a.children, className = _a.className, hasIconsLeft = _a.hasIconsLeft, hasIconsRight = _a.hasIconsRight, isExpanded = _a.isExpanded, isLoading = _a.isLoading;
        return (React.createElement("div", { className: classnames("control", className, {
                "has-icons-left": hasIconsLeft,
                "has-icons-right": hasIconsRight,
                "is-expanded": isExpanded,
                "is-loading": isLoading,
            }, modifiers_1.sizePropsToClassnames(this.props)) }, children));
    };
    return Control;
}(React.Component));
exports.default = Control;
