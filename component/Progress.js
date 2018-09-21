var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var Progress = (function (_super) {
    __extends(Progress, _super);
    function Progress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Progress.prototype.render = function () {
        var _a = this.props, isDanger = _a.isDanger, isInfo = _a.isInfo, isLarge = _a.isLarge, isLink = _a.isLink, isMedium = _a.isMedium, isPrimary = _a.isPrimary, isSmall = _a.isSmall, isSuccess = _a.isSuccess, isWarning = _a.isWarning, max = _a.max, value = _a.value;
        var className = classnames("tag", {
            "is-danger": isDanger,
            "is-info": isInfo,
            "is-large": isLarge,
            "is-link": isLink,
            "is-medium": isMedium,
            "is-primary": isPrimary,
            "is-small": isSmall,
            "is-success": isSuccess,
            "is-warning": isWarning
        });
        return (React.createElement("progress", { className: className, max: max, value: value }, this.props.children));
    };
    return Progress;
}(React.Component));
exports.default = Progress;
