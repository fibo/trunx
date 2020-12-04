Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var LevelItem = (function (_super) {
    tslib_1.__extends(LevelItem, _super);
    function LevelItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    LevelItem.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    LevelItem.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, tag = _a.as, props = tslib_1.__rest(_a, ["as"]);
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.levelItem);
    };
    LevelItem.defaultProps = { as: 'div' };
    return LevelItem;
}(React.Component));
var LevelLeft = (function (_super) {
    tslib_1.__extends(LevelLeft, _super);
    function LevelLeft() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    LevelLeft.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    LevelLeft.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.levelLeft);
    };
    return LevelLeft;
}(React.Component));
var LevelRight = (function (_super) {
    tslib_1.__extends(LevelRight, _super);
    function LevelRight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    LevelRight.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    LevelRight.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.levelRight);
    };
    return LevelRight;
}(React.Component));
var Level = (function (_super) {
    tslib_1.__extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Level.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Level.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isMobile = _a.isMobile, props = tslib_1.__rest(_a, ["isMobile"]);
        return renderElement_1.renderElement('nav', props, classNames_1.bulmaClassName.level, { isMobile: isMobile });
    };
    Level.Item = LevelItem;
    Level.Left = LevelLeft;
    Level.Right = LevelRight;
    return Level;
}(React.Component));
exports.Level = Level;
