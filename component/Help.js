Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Help = (function (_super) {
    tslib_1.__extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("p", { className: classnames("help", className, modifiers_1.mainColorsPropsToClassnames(props), modifiers_1.textColorHelpersPropsToClassnames(props)) }, children));
    };
    return Help;
}(React.Component));
exports.default = Help;
