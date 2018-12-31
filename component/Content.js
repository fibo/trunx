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
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        var _a = this.props, hasTextCentered = _a.hasTextCentered, hasTextJustified = _a.hasTextJustified, hasTextLeft = _a.hasTextLeft, hasTextRight = _a.hasTextRight;
        var className = classnames("content", {
            "has-text-centered": hasTextCentered,
            "has-text-justified": hasTextJustified,
            "has-text-left": hasTextLeft,
            "has-text-right": hasTextRight,
        }, modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Content;
}(React.Component));
exports.default = Content;
