Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var LevelItem = (function (_super) {
    tslib_1.__extends(LevelItem, _super);
    function LevelItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelItem.prototype.render = function () {
        var _a = this.props, tag = _a.as, props = tslib_1.__rest(_a, ["as"]);
        return renderElement_1.renderElement(tag, props, classNames_1.bulmaClassName.levelItem);
    };
    LevelItem.defaultProps = { as: 'div' };
    return LevelItem;
}(React.Component));
var LevelLeft = (function (_super) {
    tslib_1.__extends(LevelLeft, _super);
    function LevelLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelLeft.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.levelLeft);
    };
    return LevelLeft;
}(React.Component));
var LevelRight = (function (_super) {
    tslib_1.__extends(LevelRight, _super);
    function LevelRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelRight.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.levelRight);
    };
    return LevelRight;
}(React.Component));
var Level = (function (_super) {
    tslib_1.__extends(Level, _super);
    function Level() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Level.prototype.render = function () {
        var _a = this.props, isMobile = _a.isMobile, props = tslib_1.__rest(_a, ["isMobile"]);
        return renderElement_1.renderElement('nav', props, classNames_1.bulmaClassName.level, { isMobile: isMobile });
    };
    Level.Item = LevelItem;
    Level.Left = LevelLeft;
    Level.Right = LevelRight;
    return Level;
}(React.Component));
exports.Level = Level;
