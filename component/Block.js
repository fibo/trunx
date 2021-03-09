Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Block = (function (_super) {
    tslib_1.__extends(Block, _super);
    function Block() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Block.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Block.prototype.render = function () {
        var _a = this.props, tag = _a.as, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["as", "fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.block);
    };
    Block.defaultProps = { as: 'div' };
    return Block;
}(React.Component));
exports.Block = Block;
