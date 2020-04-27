Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var utils_1 = require("./utils");
var Columns = (function (_super) {
    tslib_1.__extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", { className: classnames("columns", className, utils_1.trunxPropsToClassnames(props)) }, children));
    };
    return Columns;
}(React.Component));
exports.default = Columns;
