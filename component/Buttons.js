Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Buttons = (function (_super) {
    tslib_1.__extends(Buttons, _super);
    function Buttons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Buttons.prototype.render = function () {
        var className = classnames("buttons", modifiers_1.helpersPropsToClassnames(this.props), modifiers_1.textColorHelpersPropsToClassnames(this.props));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Buttons;
}(React.Component));
exports.default = Buttons;
