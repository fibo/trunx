var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var Columns = (function (_super) {
    __extends(Columns, _super);
    function Columns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Columns.prototype.render = function () {
        var _a = this.props, isDesktop = _a.isDesktop, isGapless = _a.isGapless, isMobile = _a.isMobile, isMultiline = _a.isMultiline;
        var className = classnames("columns", {
            "is-desktop": isDesktop,
            "is-gapless": isGapless,
            "is-mobile": isMobile,
            "is-multiline": isMultiline,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Columns;
}(React.Component));
exports.default = Columns;
