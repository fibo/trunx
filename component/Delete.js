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
        var _a = modifiers_1.extractModifiersProps(this.props), sizeProps = _a[0].sizeProps, _b = _a[1], className = _b.className, props = tslib_1.__rest(_b, ["className"]);
        return (React.createElement("button", tslib_1.__assign({ className: classnames(className, "delete", className, modifiers_1.sizePropsToClassnames(sizeProps)) }, props)));
    };
    return Delete;
}(React.Component));
exports.default = Delete;
