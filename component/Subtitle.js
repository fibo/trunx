Object.defineProperty(exports, "__esModule", { value: true });
exports.Subtitle = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Subtitle = (function (_super) {
    tslib_1.__extends(Subtitle, _super);
    function Subtitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Subtitle.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Subtitle.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, props = tslib_1.__rest(_a, ["is1", "is2", "is3", "is4", "is5", "is6"]);
        return renderElement_1.renderElement('p', props, classNames_1.bulmaClassName.subtitle, {
            is1: is1,
            is2: is2,
            is3: is3,
            is4: is4,
            is5: is5,
            is6: is6
        });
    };
    return Subtitle;
}(React.Component));
exports.Subtitle = Subtitle;
