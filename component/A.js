Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var A = (function (_super) {
    tslib_1.__extends(A, _super);
    function A() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    A.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    A.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, isActive = _b.isActive, props = tslib_1.__rest(_b, ["children", "className", "isActive"]);
        return (React.createElement("a", tslib_1.__assign({ className: classnames(className, classNames_1.trunxPropsToClassnamesObject({ isActive: isActive }), modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return A;
}(React.Component));
exports.A = A;
