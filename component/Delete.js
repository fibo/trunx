Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Delete = (function (_super) {
    tslib_1.__extends(Delete, _super);
    function Delete() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Delete.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Delete.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('button', props, classNames_1.bulmaClassName.delete);
    };
    return Delete;
}(React.Component));
exports.Delete = Delete;
