var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Anchor = (function (_super) {
    __extends(Anchor, _super);
    function Anchor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anchor.prototype.render = function () {
        if (this.props.AnchorComponent) {
            var _a = this.props, AnchorComponent = _a.AnchorComponent, href = _a.href, hrefProp = _a.hrefProp, props = __rest(_a, ["AnchorComponent", "href", "hrefProp"]);
            props[hrefProp] = href;
            return (React.createElement(AnchorComponent, __assign({}, props), this.props.children));
        }
        else {
            var _b = this.props, className = _b.className, href = _b.href, props = __rest(_b, ["className", "href"]);
            return (React.createElement("a", __assign({ className: className, href: href }, props), this.props.children));
        }
    };
    Anchor.defaultProps = {
        hrefProp: "to"
    };
    return Anchor;
}(React.Component));
exports.Anchor = Anchor;
