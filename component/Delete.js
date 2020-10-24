Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Delete = (function (_super) {
    tslib_1.__extends(Delete, _super);
    function Delete() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Delete.prototype.render = function () {
        return renderElement_1.renderElement('button', this.props, classNames_1.bulmaClassName.delete);
    };
    return Delete;
}(React.Component));
exports.Delete = Delete;
