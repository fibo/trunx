Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var A = (function (_super) {
    tslib_1.__extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, isClearfix = _a.isClearfix, isPulledLeft = _a.isPulledLeft, isPulledRight = _a.isPulledRight, props = tslib_1.__rest(_a, ["children", "className", "isActive", "isClearfix", "isPulledLeft", "isPulledRight"]);
        return (React.createElement("a", tslib_1.__assign({}, props, { className: classnames(className, {
                "is-active": isActive,
            }, modifiers_1.floatHelpersPropsToClassnames({
                isClearfix: isClearfix,
                isPulledLeft: isPulledLeft,
                isPulledRight: isPulledRight,
            })) }), children));
    };
    return A;
}(React.Component));
exports.default = A;
