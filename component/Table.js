Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var TableContainer = (function (_super) {
    tslib_1.__extends(TableContainer, _super);
    function TableContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    TableContainer.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    TableContainer.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.tableContainer);
    };
    return TableContainer;
}(React.Component));
var Table = (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Table.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Table.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isBordered = _a.isBordered, isFullwidth = _a.isFullwidth, isHoverable = _a.isHoverable, isNarrow = _a.isNarrow, isStriped = _a.isStriped, props = tslib_1.__rest(_a, ["fallbackUI", "isBordered", "isFullwidth", "isHoverable", "isNarrow", "isStriped"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('table', props, classNames_1.bulmaClassName.table, {
            isBordered: isBordered,
            isFullwidth: isFullwidth,
            isHoverable: isHoverable,
            isNarrow: isNarrow,
            isStriped: isStriped,
        });
    };
    Table.Container = TableContainer;
    return Table;
}(React.Component));
exports.Table = Table;
