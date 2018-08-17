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
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        var _a = this.props, isAncestor = _a.isAncestor, isChild = _a.isChild, isParent = _a.isParent;
        var className = classnames('tile', {
            'is-ancestor': isAncestor,
            'is-child': isChild,
            'is-parent': isParent,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return Tile;
}(React.Component));
exports.default = Tile;
