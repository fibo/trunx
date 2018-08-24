var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.render = function () {
        var _a = this.props, isBordered = _a.isBordered, isFullwidth = _a.isFullwidth, isHoverable = _a.isHoverable, isNarrow = _a.isNarrow, isStriped = _a.isStriped;
        var className = classnames("table", {
            "is-bordered": isBordered,
            "is-fullwidth": isFullwidth,
            "is-hoverable": isHoverable,
            "is-narrow": isNarrow,
            "is-striped": isStriped,
        });
        return (React.createElement("table", { className: className }, this.props.children));
    };
    return Table;
}(React.Component));
exports.default = Table;
