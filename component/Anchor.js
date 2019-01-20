Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Anchor = (function (_super) {
    tslib_1.__extends(Anchor, _super);
    function Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anchor.prototype.render = function () {
        if (this.props.AnchorComponent) {
            var _a = this.props, AnchorComponent = _a.AnchorComponent, href = _a.href, hrefProp = _a.hrefProp, props = tslib_1.__rest(_a, ["AnchorComponent", "href", "hrefProp"]);
            if (hrefProp && href) {
                props[hrefProp] = href;
            }
            return (React.createElement(AnchorComponent, tslib_1.__assign({}, props), this.props.children));
        }
        else {
            var _b = this.props, className = _b.className, href = _b.href, props = tslib_1.__rest(_b, ["className", "href"]);
            return (React.createElement("a", tslib_1.__assign({ className: className, href: href }, props), this.props.children));
        }
    };
    Anchor.defaultProps = {
        hrefProp: "to"
    };
    return Anchor;
}(React.Component));
exports.Anchor = Anchor;
