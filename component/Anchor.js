Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Anchor = (function (_super) {
    tslib_1.__extends(Anchor, _super);
    function Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anchor.prototype.render = function () {
        var _a = this.props, className = _a.className, props = tslib_1.__rest(_a, ["className"]);
        return (React.createElement("a", tslib_1.__assign({}, props, { className: className }), this.props.children));
    };
    return Anchor;
}(React.Component));
exports.Anchor = Anchor;
