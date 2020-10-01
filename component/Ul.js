Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Ul = (function (_super) {
    tslib_1.__extends(Ul, _super);
    function Ul() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ul.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("ul", tslib_1.__assign({}, props, { className: className }), children));
    };
    return Ul;
}(React.Component));
exports.default = Ul;
