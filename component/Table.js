Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Table = (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, children = _a.children, isBordered = _a.isBordered, isFullwidth = _a.isFullwidth, isHoverable = _a.isHoverable, isNarrow = _a.isNarrow, isStriped = _a.isStriped, props = tslib_1.__rest(_a, ["children", "isBordered", "isFullwidth", "isHoverable", "isNarrow", "isStriped"]);
        var className = classnames("table", {
            "is-bordered": isBordered,
            "is-fullwidth": isFullwidth,
            "is-hoverable": isHoverable,
            "is-narrow": isNarrow,
            "is-striped": isStriped,
        });
        return (React.createElement("table", tslib_1.__assign({}, props, { className: className }), children));
    };
    return Table;
}(React.Component));
exports.default = Table;
