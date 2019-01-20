Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Checkbox = (function (_super) {
    tslib_1.__extends(Checkbox, _super);
    function Checkbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, inputRef = _a.inputRef;
        return (React.createElement("label", { className: "checkbox" },
            React.createElement("input", { disabled: disabled, ref: inputRef, type: "checkbox" }),
            " ",
            this.props.children));
    };
    return Checkbox;
}(React.Component));
exports.default = Checkbox;
