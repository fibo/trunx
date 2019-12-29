Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Strong = (function (_super) {
    tslib_1.__extends(Strong, _super);
    function Strong() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Strong.prototype.render = function () {
        var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
        var className = classnames(modifiers_1.backgroundColorHelpersPropsToClassnames(props), modifiers_1.textColorHelpersPropsToClassnames(props));
        return (React.createElement("strong", { className: className }, children));
    };
    return Strong;
}(React.Component));
exports.default = Strong;
