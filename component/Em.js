Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Em = (function (_super) {
    tslib_1.__extends(Em, _super);
    function Em() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Em.prototype.render = function () {
        var className = classnames(modifiers_1.backgroundColorHelpersPropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("em", { className: className }, this.props.children));
    };
    return Em;
}(React.Component));
exports.default = Em;
