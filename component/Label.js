Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Label = (function (_super) {
    tslib_1.__extends(Label, _super);
    function Label() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Label.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("label", { className: classnames("label", className, modifiers_1.sizePropsToClassnames(this.props), modifiers_1.textColorHelpersPropsToClassnames(this.props)) }, children));
    };
    return Label;
}(React.Component));
exports.default = Label;
