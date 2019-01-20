Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Container = (function (_super) {
    tslib_1.__extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        var _a = this.props, isFluid = _a.isFluid, isFullhd = _a.isFullhd, isWidescreen = _a.isWidescreen;
        var className = classnames("container", {
            "is-fluid": isFluid,
            "is-fullhd": isFullhd,
            "is-widescreen": isWidescreen,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Container;
}(React.Component));
exports.default = Container;
