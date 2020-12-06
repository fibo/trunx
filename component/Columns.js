Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var Columns = (function (_super) {
    tslib_1.__extends(Columns, _super);
    function Columns() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Columns.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Columns.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isDesktop = _a.isDesktop, isGapless = _a.isGapless, isMobile = _a.isMobile, isMultiline = _a.isMultiline, props = tslib_1.__rest(_a, ["isDesktop", "isGapless", "isMobile", "isMultiline"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.columns, {
            isDesktop: isDesktop,
            isGapless: isGapless,
            isMobile: isMobile,
            isMultiline: isMultiline,
        });
    };
    return Columns;
}(React.Component));
exports.Columns = Columns;
