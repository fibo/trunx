Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var P = (function (_super) {
    tslib_1.__extends(P, _super);
    function P() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    P.prototype.render = function () {
        var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
        var className = classnames(modifiers_1.alignementPropsToClassnames(props), modifiers_1.backgroundColorHelpersPropsToClassnames(props), modifiers_1.textColorHelpersPropsToClassnames(props));
        return (React.createElement("p", { className: className }, children));
    };
    return P;
}(React.Component));
exports.default = P;
