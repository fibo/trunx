Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Delete = (function (_super) {
    tslib_1.__extends(Delete, _super);
    function Delete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delete.prototype.render = function () {
        var _a = this.props, className = _a.className, onClick = _a.onClick;
        return (React.createElement("button", { "aria-label": "delete", className: classnames(className, "delete", className, modifiers_1.sizePropsToClassnames(this.props)), onClick: onClick }));
    };
    return Delete;
}(React.Component));
exports.default = Delete;
