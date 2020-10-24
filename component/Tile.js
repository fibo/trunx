Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var TileAncestor = (function (_super) {
    tslib_1.__extends(TileAncestor, _super);
    function TileAncestor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileAncestor.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-ancestor', className) }, props), children));
    };
    return TileAncestor;
}(React.Component));
var TileChildBox = (function (_super) {
    tslib_1.__extends(TileChildBox, _super);
    function TileChildBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChildBox.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-child', classNames_1.bulmaClassName.box, className) }, props), children));
    };
    return TileChildBox;
}(React.Component));
var TileChildNotification = (function (_super) {
    tslib_1.__extends(TileChildNotification, _super);
    function TileChildNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChildNotification.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], className = _b.className, children = _b.children, props = tslib_1.__rest(_b, ["className", "children"]);
        return (React.createElement("article", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-child', classNames_1.bulmaClassName.notification, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return TileChildNotification;
}(React.Component));
var TileChild = (function (_super) {
    tslib_1.__extends(TileChild, _super);
    function TileChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChild.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.tile, 'is-child', className) }, props), children));
    };
    TileChild.Box = TileChildBox;
    TileChild.Notification = TileChildNotification;
    return TileChild;
}(React.Component));
var Tile = (function (_super) {
    tslib_1.__extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, is7 = _a.is7, is8 = _a.is8, is9 = _a.is9, is10 = _a.is10, is11 = _a.is11, is12 = _a.is12, isParent = _a.isParent, isVertical = _a.isVertical, props = tslib_1.__rest(_a, ["children", "className", "is1", "is2", "is3", "is4", "is5", "is6", "is7", "is8", "is9", "is10", "is11", "is12", "isParent", "isVertical"]);
        return (React.createElement("div", tslib_1.__assign({}, props, { className: classnames('tile', className, {
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
                'is-vertical': isVertical
            }) }), children));
    };
    Tile.Ancestor = TileAncestor;
    Tile.Child = TileChild;
    return Tile;
}(React.Component));
exports.Tile = Tile;
