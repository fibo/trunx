Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Progress = (function (_super) {
    tslib_1.__extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        return renderElement_1.renderElement('progress', this.props, classNames_1.bulmaClassName.progress);
    };
    return Progress;
}(React.Component));
exports.Progress = Progress;
