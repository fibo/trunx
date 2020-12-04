Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Progress = (function (_super) {
    tslib_1.__extends(Progress, _super);
    function Progress() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Progress.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Progress.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('progress', this.props, classNames_1.bulmaClassName.progress);
    };
    return Progress;
}(React.Component));
exports.Progress = Progress;
