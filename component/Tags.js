Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Tags = (function (_super) {
    tslib_1.__extends(Tags, _super);
    function Tags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tags.prototype.render = function () {
        var _a = this.props, areLarge = _a.areLarge, areMedium = _a.areMedium, hasAddons = _a.hasAddons;
        var className = classnames("tags", {
            "are-large": areLarge,
            "are-medium": areMedium,
            "has-addons": hasAddons,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Tags;
}(React.Component));
exports.default = Tags;
