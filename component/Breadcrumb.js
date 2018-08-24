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
var classnames_1 = require("classnames");
var React = require("react");
var Breadcrumb = (function (_super) {
    __extends(Breadcrumb, _super);
    function Breadcrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Breadcrumb.prototype.render = function () {
        var isCentered = this.props.isCentered;
        var className = classnames_1.default("breadcrumb", {
            "is-centered": isCentered,
        });
        return (React.createElement("nav", { "aria-label": "breadcrumbs", className: className },
            React.createElement("ul", null, this.props.children)));
    };
    return Breadcrumb;
}(React.Component));
exports.default = Breadcrumb;
