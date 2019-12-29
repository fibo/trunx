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
        var className = classnames("help", modifiers_1.mainColorsPropsToClassnames(this.props), modifiers_1.textColorHelpersPropsToClassnames(this.props));
        return (React.createElement("p", { className: className }, this.props.children));
    };
    return Help;
}(React.Component));
exports.default = Help;
