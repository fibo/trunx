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
        var _a = modifiers_1.extractModifiersProps(this.props), floatHelpersProps = _a[0].floatHelpersProps, _b = _a[1], children = _b.children, className = _b.className, isActive = _b.isActive, props = tslib_1.__rest(_b, ["children", "className", "isActive"]);
        return (React.createElement("a", tslib_1.__assign({ className: classnames(className, {
                "is-active": isActive,
            }, modifiers_1.floatHelpersPropsToClassnames(floatHelpersProps)) }, props), children));
    };
    return A;
}(React.Component));
exports.default = A;
