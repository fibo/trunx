Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Tag = (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tag.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tag.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isDelete = _a.isDelete, isNormal = _a.isNormal, isRounded = _a.isRounded, props = tslib_1.__rest(_a, ["fallbackUI", "isDelete", "isNormal", "isRounded"]);
        if (this.state.hasError)
            return fallbackUI;
        var tag = props.href || props.onClick ? 'a' : 'span';
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.tag, {
            isDelete: isDelete,
            isNormal: isNormal,
            isRounded: isRounded,
        });
    };
    return Tag;
}(React.Component));
exports.Tag = Tag;
