var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var TileAncestor = (function (_super) {
    __extends(TileAncestor, _super);
    function TileAncestor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileAncestor.prototype.render = function () {
        return (React.createElement("div", { className: "tile is-ancestor" }, this.props.children));
    };
    return TileAncestor;
}(React.Component));
var TileChildBox = (function (_super) {
    __extends(TileChildBox, _super);
    function TileChildBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChildBox.prototype.render = function () {
        return (React.createElement("article", { className: "tile is-child box" }, this.props.children));
    };
    return TileChildBox;
}(React.Component));
var TileChildNotification = (function (_super) {
    __extends(TileChildNotification, _super);
    function TileChildNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChildNotification.prototype.render = function () {
        var className = classnames("tile is-child notification", modifiers_1.mainColorsPropsToClassenames(this.props));
        return (React.createElement("article", { className: className }, this.props.children));
    };
    return TileChildNotification;
}(React.Component));
var TileChild = (function (_super) {
    __extends(TileChild, _super);
    function TileChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileChild.prototype.render = function () {
        return (React.createElement("div", { className: "tile is-child" }, this.props.children));
    };
    TileChild.Box = TileChildBox;
    TileChild.Notification = TileChildNotification;
    return TileChild;
}(React.Component));
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        var _a = this.props, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, is7 = _a.is7, is8 = _a.is8, is9 = _a.is9, is10 = _a.is10, is11 = _a.is11, is12 = _a.is12, isParent = _a.isParent, isVertical = _a.isVertical;
        var className = classnames("tile", {
            "is-1": is1,
            "is-2": is2,
            "is-3": is3,
            "is-4": is4,
            "is-5": is5,
            "is-6": is6,
            "is-7": is7,
            "is-8": is8,
            "is-9": is9,
            "is-10": is10,
            "is-11": is11,
            "is-12": is12,
            "is-parent": isParent,
            "is-vertical": isVertical,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    Tile.Ancestor = TileAncestor;
    Tile.Child = TileChild;
    return Tile;
}(React.Component));
exports.default = Tile;
