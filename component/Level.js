Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var LevelItem = (function (_super) {
    tslib_1.__extends(LevelItem, _super);
    function LevelItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelItem.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, hasTextCentered = _a.hasTextCentered, props = tslib_1.__rest(_a, ["className", "children", "hasTextCentered"]);
        return (React.createElement("div", { className: classnames("level-item", className, {
                "has-text-centered": hasTextCentered,
            }, modifiers_1.textColorHelpersPropsToClassnames(props)) }, children));
    };
    return LevelItem;
}(React.Component));
var LevelLeft = (function (_super) {
    tslib_1.__extends(LevelLeft, _super);
    function LevelLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelLeft.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("level-left", className, modifiers_1.textColorHelpersPropsToClassnames(this.props)) }, children));
    };
    return LevelLeft;
}(React.Component));
var LevelRight = (function (_super) {
    tslib_1.__extends(LevelRight, _super);
    function LevelRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelRight.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("div", { className: classnames("level-right", className, modifiers_1.textColorHelpersPropsToClassnames(this.props)) }, children));
    };
    return LevelRight;
}(React.Component));
var Level = (function (_super) {
    tslib_1.__extends(Level, _super);
    function Level() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isMobile = _a.isMobile;
        return (React.createElement("nav", { className: classnames("level", className, {
                "is-mobile": isMobile,
            }, modifiers_1.textColorHelpersPropsToClassnames(this.props)) }, children));
    };
    Level.Item = LevelItem;
    Level.Left = LevelLeft;
    Level.Right = LevelRight;
    return Level;
}(React.Component));
exports.default = Level;
