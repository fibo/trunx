Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Content = (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        var _a = this.props, hasTextCentered = _a.hasTextCentered, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextRight = _a.hasTextRight, props = tslib_1.__rest(_a, ["hasTextCentered", "hasTextJustified", "hasTextLeft", "hasTextRight"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.content, { hasTextCentered: hasTextCentered, hasTextJustified: hasTextJustified, hasTextLeft: hasTextLeft, hasTextRight: hasTextRight });
    };
    return Content;
}(React.Component));
exports.Content = Content;
