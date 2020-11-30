Object.defineProperty(exports, "__esModule", { value: true });
exports.Textarea = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Textarea = (function (_super) {
    tslib_1.__extends(Textarea, _super);
    function Textarea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textarea.prototype.render = function () {
        var _a = this.props, isFocused = _a.isFocused, isHovered = _a.isHovered, props = tslib_1.__rest(_a, ["isFocused", "isHovered"]);
        return renderElement_1.renderElement('textarea', props, classNames_1.bulmaClassName.textarea, {
            isFocused: isFocused,
            isHovered: isHovered,
        });
    };
    return Textarea;
}(React.Component));
exports.Textarea = Textarea;
