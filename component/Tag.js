Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Tag = (function (_super) {
    tslib_1.__extends(Tag, _super);
    function Tag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tag.prototype.render = function () {
        var _a = this.props, href = _a.href, onClick = _a.onClick, isDelete = _a.isDelete, isNormal = _a.isNormal, isRounded = _a.isRounded, props = tslib_1.__rest(_a, ["href", "onClick", "isDelete", "isNormal", "isRounded"]);
        var tag = href || onClick ? 'a' : 'span';
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.tag, {
            isDelete: isDelete,
            isNormal: isNormal,
            isRounded: isRounded
        });
    };
    return Tag;
}(React.Component));
exports.Tag = Tag;
