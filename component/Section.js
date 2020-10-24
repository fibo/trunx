Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Section = (function (_super) {
    tslib_1.__extends(Section, _super);
    function Section() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Section.prototype.render = function () {
        var _a = this.props, isLarge = _a.isLarge, isMedium = _a.isMedium, props = tslib_1.__rest(_a, ["isLarge", "isMedium"]);
        return renderElement_1.renderElement('section', props, classNames_1.bulmaClassName.section, { isLarge: isLarge, isMedium: isMedium });
    };
    return Section;
}(React.Component));
exports.Section = Section;
