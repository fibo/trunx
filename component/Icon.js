Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var IconSvg = (function (_super) {
    tslib_1.__extends(IconSvg, _super);
    function IconSvg() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    IconSvg.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    IconSvg.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, className = _a.className, icon = _a.icon, fill = _a.fill, size = _a.size;
        return (React.createElement("svg", { "aria-hidden": 'true', className: className, height: size, role: 'img', viewBox: icon === null || icon === void 0 ? void 0 : icon.viewBox, width: size, xmlns: 'http://www.w3.org/2000/svg' },
            React.createElement("path", { fill: fill, d: icon === null || icon === void 0 ? void 0 : icon.d })));
    };
    IconSvg.defaultProps = {
        fill: 'currentColor',
        size: '1em',
        icon: {
            d: 'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z',
            viewBox: '0 0 512 512'
        }
    };
    return IconSvg;
}(React.Component));
var Icon = (function (_super) {
    tslib_1.__extends(Icon, _super);
    function Icon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Icon.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Icon.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isLeft = _a.isLeft, isRight = _a.isRight, props = tslib_1.__rest(_a, ["isLeft", "isRight"]);
        return renderElement_1.renderElement('span', props, classNames_1.bulmaClassName.icon, {
            isLeft: isLeft,
            isRight: isRight
        });
    };
    Icon.Svg = IconSvg;
    return Icon;
}(React.Component));
exports.Icon = Icon;
