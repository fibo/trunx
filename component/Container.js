Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Container = (function (_super) {
    tslib_1.__extends(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Container.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Container.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isFluid = _a.isFluid, isFullhd = _a.isFullhd, isWidescreen = _a.isWidescreen, props = tslib_1.__rest(_a, ["fallbackUI", "isFluid", "isFullhd", "isWidescreen"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('div', props, classNames_1.bulmaClassName.container, {
            isFluid: isFluid,
            isFullhd: isFullhd,
            isWidescreen: isWidescreen,
        });
    };
    return Container;
}(React.Component));
exports.Container = Container;
