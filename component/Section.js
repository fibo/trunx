Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Section = (function (_super) {
    tslib_1.__extends(Section, _super);
    function Section() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Section.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Section.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isLarge = _a.isLarge, isMedium = _a.isMedium, props = tslib_1.__rest(_a, ["fallbackUI", "isLarge", "isMedium"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('section', props, classNames_1.bulmaClassName.section, {
            isLarge: isLarge,
            isMedium: isMedium,
        });
    };
    return Section;
}(React.Component));
exports.Section = Section;
