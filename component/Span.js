Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Span = (function (_super) {
    tslib_1.__extends(Span, _super);
    function Span() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Span.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("span", tslib_1.__assign({}, props, { className: classnames(className, modifiers_1.backgroundColorHelpersPropsToClassnames(props), modifiers_1.textColorHelpersPropsToClassnames(props)) }), children));
    };
    return Span;
}(React.Component));
exports.default = Span;
