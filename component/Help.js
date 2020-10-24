Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Help = (function (_super) {
    tslib_1.__extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.render = function () {
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.help);
    };
    return Help;
}(React.Component));
exports.Help = Help;
