Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Box = (function (_super) {
    tslib_1.__extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.render = function () {
        var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
        var className = classnames("box", modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("div", tslib_1.__assign({}, props, { className: className }), children));
    };
    return Box;
}(React.Component));
exports.default = Box;
