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
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("field-body", className) }, children));
    };
    return FieldBody;
}(React.Component));
var FieldLabel = (function (_super) {
    tslib_1.__extends(FieldLabel, _super);
    function FieldLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldLabel.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", { className: classnames("field-label", className, modifiers_1.sizePropsToClassnames(props)) }, children));
    };
    return FieldLabel;
}(React.Component));
var Field = (function (_super) {
    tslib_1.__extends(Field, _super);
    function Field() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Field.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, hasAddons = _a.hasAddons, hasAddonsCentered = _a.hasAddonsCentered, isGrouped = _a.isGrouped, isGroupedMultiline = _a.isGroupedMultiline, isHorizontal = _a.isHorizontal, isInvisible = _a.isInvisible, isMarginLess = _a.isMarginLess, isPaddingLess = _a.isPaddingLess, isSrOnly = _a.isSrOnly;
        return (React.createElement("div", { className: classnames("field", className, {
                "has-addons": hasAddons,
                "has-addons-centered": hasAddonsCentered,
                "is-grouped": isGrouped,
                "is-grouped-multiline": isGroupedMultiline,
                "is-horizontal": isHorizontal,
            }, modifiers_1.helpersPropsToClassnames({
                isInvisible: isInvisible,
                isMarginLess: isMarginLess,
                isPaddingLess: isPaddingLess,
                isSrOnly: isSrOnly,
            })) }, children));
    };
    Field.Body = FieldBody;
    Field.Label = FieldLabel;
    return Field;
}(React.Component));
exports.default = Field;
