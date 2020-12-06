Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Title = (function (_super) {
    tslib_1.__extends(Title, _super);
    function Title() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Title.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Title.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, isSpaced = _a.isSpaced, props = tslib_1.__rest(_a, ["is1", "is2", "is3", "is4", "is5", "is6", "isSpaced"]);
        var tag = 'p';
        if (is1)
            tag = 'h1';
        if (is2)
            tag = 'h2';
        if (is3)
            tag = 'h3';
        if (is4)
            tag = 'h4';
        if (is5)
            tag = 'h5';
        if (is6)
            tag = 'h6';
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.title, {
            is1: is1,
            is2: is2,
            is3: is3,
            is4: is4,
            is5: is5,
            is6: is6,
            isSpaced: isSpaced,
        });
    };
    return Title;
}(React.Component));
exports.Title = Title;
