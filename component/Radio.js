Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var Radio = (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Radio.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Radio.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("label", { className: classnames(classNames_1.bulmaClassName.radio, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) },
            React.createElement("input", tslib_1.__assign({}, props, { type: 'radio' })),
            children));
    };
    return Radio;
}(React.Component));
exports.Radio = Radio;
