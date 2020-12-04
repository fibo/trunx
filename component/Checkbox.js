Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var Checkbox = (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Checkbox.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Checkbox.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("label", { className: classnames(classNames_1.bulmaClassName.checkbox, className) },
            React.createElement("input", tslib_1.__assign({ type: 'checkbox' }, props)),
            ' ',
            children));
    };
    return Checkbox;
}(React.Component));
exports.Checkbox = Checkbox;
