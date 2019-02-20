Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var FieldBody = (function (_super) {
    tslib_1.__extends(FieldBody, _super);
    function FieldBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldBody.prototype.render = function () {
        return (React.createElement("div", { className: "field-body" }, this.props.children));
    };
    return FieldBody;
}(React.Component));
var FieldLabel = (function (_super) {
    tslib_1.__extends(FieldLabel, _super);
    function FieldLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldLabel.prototype.render = function () {
        var className = classnames("field-label", modifiers_1.sizePropsToClassenames(this.props));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return FieldLabel;
}(React.Component));
var Field = (function (_super) {
    tslib_1.__extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, hasAddons = _a.hasAddons, hasAddonsCentered = _a.hasAddonsCentered, isGrouped = _a.isGrouped, isGroupedMultiline = _a.isGroupedMultiline, isHorizontal = _a.isHorizontal, isInvisible = _a.isInvisible, isMarginLess = _a.isMarginLess, isPaddingLess = _a.isPaddingLess, isSrOnly = _a.isSrOnly;
        var className = classnames("field", {
            "has-addons": hasAddons,
            "has-addons-centered": hasAddonsCentered,
            "is-grouped": isGrouped,
            "is-grouped-multiline": isGroupedMultiline,
            "is-horizontal": isHorizontal,
        }, modifiers_1.helpersPropsToClassenames({
            isInvisible: isInvisible,
            isMarginLess: isMarginLess,
            isPaddingLess: isPaddingLess,
            isSrOnly: isSrOnly,
        }));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    Field.Body = FieldBody;
    Field.Label = FieldLabel;
    return Field;
}(React.Component));
exports.default = Field;
