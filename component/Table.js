Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var TableContainer = (function (_super) {
    tslib_1.__extends(TableContainer, _super);
    function TableContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableContainer.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("table-container", className) }, children));
    };
    return TableContainer;
}(React.Component));
var Table = (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isBordered = _a.isBordered, isFullwidth = _a.isFullwidth, isHoverable = _a.isHoverable, isNarrow = _a.isNarrow, isStriped = _a.isStriped, props = tslib_1.__rest(_a, ["children", "className", "isBordered", "isFullwidth", "isHoverable", "isNarrow", "isStriped"]);
        return (React.createElement("table", tslib_1.__assign({}, props, { className: classnames("table", className, {
                "is-bordered": isBordered,
                "is-fullwidth": isFullwidth,
                "is-hoverable": isHoverable,
                "is-narrow": isNarrow,
                "is-striped": isStriped,
            }) }), children));
    };
    Table.Container = TableContainer;
    return Table;
}(React.Component));
exports.default = Table;
