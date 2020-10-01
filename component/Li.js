Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Li = (function (_super) {
    tslib_1.__extends(Li, _super);
    function Li() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Li.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive, props = tslib_1.__rest(_a, ["children", "className", "isActive"]);
        return (React.createElement("li", tslib_1.__assign({ className: classnames(className, {
                "is-active": isActive,
            }) }, props), children));
    };
    return Li;
}(React.Component));
exports.default = Li;
