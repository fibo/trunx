var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var Help = (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.render = function () {
        var _a = this.props, isDanger = _a.isDanger, isInfo = _a.isInfo, isPrimary = _a.isPrimary, isSuccess = _a.isSuccess, isWarning = _a.isWarning;
        var className = classnames('help', {
            'is-danger': isDanger,
            'is-info': isInfo,
            'is-primary': isPrimary,
            'is-success': isSuccess,
            'is-warning': isWarning
        });
        return (React.createElement("p", { className: className }, this.props.children));
    };
    return Help;
}(React.Component));
exports.default = Help;
