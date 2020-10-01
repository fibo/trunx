Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Heading = (function (_super) {
    tslib_1.__extends(Heading, _super);
    function Heading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heading.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("p", { className: classnames("heading", className, modifiers_1.textColorHelpersPropsToClassnames(this.props)) }, children));
    };
    return Heading;
}(React.Component));
exports.default = Heading;
