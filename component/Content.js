Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Content = (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Content.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Content.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, hasTextCentered = _a.hasTextCentered, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextRight = _a.hasTextRight, props = tslib_1.__rest(_a, ["hasTextCentered", "hasTextJustified", "hasTextLeft", "hasTextRight"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.content, {
            hasTextCentered: hasTextCentered,
            hasTextJustified: hasTextJustified,
            hasTextLeft: hasTextLeft,
            hasTextRight: hasTextRight,
        });
    };
    return Content;
}(React.Component));
exports.Content = Content;
