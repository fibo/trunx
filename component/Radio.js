Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Radio = (function (_super) {
    tslib_1.__extends(Radio, _super);
    function Radio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radio.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, disabled = _a.disabled, inputRef = _a.inputRef, props = tslib_1.__rest(_a, ["children", "className", "disabled", "inputRef"]);
        return (React.createElement("label", { className: classnames("radio", className), disabled: disabled },
            React.createElement("input", tslib_1.__assign({}, props, { disabled: disabled, type: "radio" })),
            children));
    };
    return Radio;
}(React.Component));
exports.default = Radio;
