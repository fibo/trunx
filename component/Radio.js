Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Radio = (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, inputRef = _a.inputRef, props = tslib_1.__rest(_a, ["inputRef"]);
        return (React.createElement("label", { className: "radio" },
            React.createElement("input", tslib_1.__assign({}, props, { type: "radio" })),
            " ",
            this.props.children));
    };
    return Radio;
}(React.Component));
exports.default = Radio;
