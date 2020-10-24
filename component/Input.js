Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Input = (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Input.prototype.render = function () {
        var _a = this.props, isFocused = _a.isFocused, isHovered = _a.isHovered, isRounded = _a.isRounded, isStatic = _a.isStatic, type = _a.type, props = tslib_1.__rest(_a, ["isFocused", "isHovered", "isRounded", "isStatic", "type"]);
        return renderElement_1.renderElement('input', tslib_1.__assign({ type: type }, props), classNames_1.bulmaClassName.input, {
            isFocused: isFocused,
            isHovered: isHovered,
            isRounded: isRounded,
            isStatic: isStatic
        });
    };
    return Input;
}(React.Component));
exports.Input = Input;
