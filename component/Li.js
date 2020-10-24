Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Li = (function (_super) {
    tslib_1.__extends(Li, _super);
    function Li() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Li.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('li', props, undefined, { isActive: isActive });
    };
    return Li;
}(React.Component));
exports.Li = Li;
