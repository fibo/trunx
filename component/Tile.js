Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var TileAncestor = (function (_super) {
    tslib_1.__extends(TileAncestor, _super);
    function TileAncestor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    TileAncestor.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    TileAncestor.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-ancestor', className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return TileAncestor;
}(React.Component));
var TileChildBox = (function (_super) {
    tslib_1.__extends(TileChildBox, _super);
    function TileChildBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    TileChildBox.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    TileChildBox.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-child', classNames_1.bulmaClassName.box, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return TileChildBox;
}(React.Component));
var TileChildNotification = (function (_super) {
    tslib_1.__extends(TileChildNotification, _super);
    function TileChildNotification() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    TileChildNotification.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    TileChildNotification.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], className = _b.className, children = _b.children, props = tslib_1.__rest(_b, ["className", "children"]);
        return (React.createElement("article", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-child', classNames_1.bulmaClassName.notification, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return TileChildNotification;
}(React.Component));
var TileChild = (function (_super) {
    tslib_1.__extends(TileChild, _super);
    function TileChild() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    TileChild.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    TileChild.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-child', className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    TileChild.Box = TileChildBox;
    TileChild.Notification = TileChildNotification;
    return TileChild;
}(React.Component));
var Tile = (function (_super) {
    tslib_1.__extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Tile.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Tile.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, is1 = _b.is1, is2 = _b.is2, is3 = _b.is3, is4 = _b.is4, is5 = _b.is5, is6 = _b.is6, is7 = _b.is7, is8 = _b.is8, is9 = _b.is9, is10 = _b.is10, is11 = _b.is11, is12 = _b.is12, isParent = _b.isParent, isVertical = _b.isVertical, props = tslib_1.__rest(_b, ["children", "className", "is1", "is2", "is3", "is4", "is5", "is6", "is7", "is8", "is9", "is10", "is11", "is12", "isParent", "isVertical"]);
        return (React.createElement("div", tslib_1.__assign({}, props, { className: classnames(classNames_1.bulmaClassName.tile, className, {
                'is-1': is1,
                'is-2': is2,
                'is-3': is3,
                'is-4': is4,
                'is-5': is5,
                'is-6': is6,
                'is-7': is7,
                'is-8': is8,
                'is-9': is9,
                'is-10': is10,
                'is-11': is11,
                'is-12': is12,
                'is-parent': isParent,
                'is-vertical': isVertical,
            }, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }), children));
    };
    Tile.Ancestor = TileAncestor;
    Tile.Child = TileChild;
    return Tile;
}(React.Component));
exports.Tile = Tile;
