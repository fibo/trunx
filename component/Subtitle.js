var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Subtitle = (function (_super) {
    __extends(Subtitle, _super);
    function Subtitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtitle.prototype.render = function () {
        var _a = this.props, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6;
        var className = classnames("subtitle", {
            "is-1": is1,
            "is-2": is2,
            "is-3": is3,
            "is-4": is4,
            "is-5": is5,
            "is-6": is6,
        }, modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("p", { className: className }, this.props.children));
    };
    return Subtitle;
}(React.Component));
exports.default = Subtitle;
