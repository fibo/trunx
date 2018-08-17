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
var Container = (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        var _a = this.props, isFluid = _a.isFluid, isFullhd = _a.isFullhd, isWidescreen = _a.isWidescreen;
        var className = classnames('container', {
            'is-fluid': isFluid,
            'is-fullhd': isFullhd,
            'is-widescreen': isWidescreen,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Container;
}(React.Component));
exports.default = Container;
