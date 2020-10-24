Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Columns = (function (_super) {
    tslib_1.__extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.columns);
    };
    return Columns;
}(React.Component));
exports.Columns = Columns;
