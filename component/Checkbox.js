Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Checkbox = (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
        return (React.createElement("label", { className: "checkbox" },
            React.createElement("input", tslib_1.__assign({ type: "checkbox" }, props)),
            " ",
            children));
    };
    return Checkbox;
}(React.Component));
exports.default = Checkbox;
