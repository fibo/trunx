Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Anchor = (function (_super) {
    tslib_1.__extends(Anchor, _super);
    function Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anchor.prototype.render = function () {
        var _a = this.props, AnchorComponent = _a.AnchorComponent, className = _a.className, href = _a.href, hrefProp = _a.hrefProp, props = tslib_1.__rest(_a, ["AnchorComponent", "className", "href", "hrefProp"]);
        if (AnchorComponent) {
            if (hrefProp && href) {
                props[hrefProp] = href;
            }
            return (React.createElement(AnchorComponent, tslib_1.__assign({}, props), this.props.children));
        }
        else {
            return (React.createElement("a", tslib_1.__assign({}, props, { className: className, href: href }), this.props.children));
        }
    };
    Anchor.defaultProps = {
        hrefProp: "to"
    };
    return Anchor;
}(React.Component));
exports.Anchor = Anchor;
