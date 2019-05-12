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
        var _a = this.props, isActive = _a.isActive, isClearfix = _a.isClearfix, isPulledLeft = _a.isPulledLeft, isPulledRight = _a.isPulledRight, props = tslib_1.__rest(_a, ["isActive", "isClearfix", "isPulledLeft", "isPulledRight"]);
        var className = classnames({
            isActive: "is-active",
        }, modifiers_1.floatHelpersPropsToClassenames({
            isClearfix: isClearfix,
            isPulledLeft: isPulledLeft,
            isPulledRight: isPulledRight,
        }));
        return (React.createElement("a", tslib_1.__assign({}, props, { className: className }), this.props.children));
    };
    return A;
}(React.Component));
exports.default = A;
