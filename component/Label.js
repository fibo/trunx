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
        var className = classnames("label", modifiers_1.sizePropsToClassenames(this.props), modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("label", { className: className }, this.props.children));
    };
    return Label;
}(React.Component));
exports.default = Label;
