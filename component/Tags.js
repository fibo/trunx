Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Tags = (function (_super) {
    tslib_1.__extends(Tags, _super);
    function Tags() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tags.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tags.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, areLarge = _a.areLarge, areMedium = _a.areMedium, hasAddons = _a.hasAddons, props = tslib_1.__rest(_a, ["areLarge", "areMedium", "hasAddons"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.tags, {
            areLarge: areLarge,
            areMedium: areMedium,
            hasAddons: hasAddons,
        });
    };
    return Tags;
}(React.Component));
exports.Tags = Tags;
