Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Tags = (function (_super) {
    tslib_1.__extends(Tags, _super);
    function Tags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tags.prototype.render = function () {
        var _a = this.props, areLarge = _a.areLarge, areMedium = _a.areMedium, children = _a.children, hasAddons = _a.hasAddons, props = tslib_1.__rest(_a, ["areLarge", "areMedium", "children", "hasAddons"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.tags, { areLarge: areLarge, areMedium: areMedium, hasAddons: hasAddons });
    };
    return Tags;
}(React.Component));
exports.Tags = Tags;
