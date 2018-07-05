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
var React = require("react");
var Navbar = require("./Navbar");
var initialState = {
    isActive: false
};
var ClassicNavbar = (function (_super) {
    __extends(ClassicNavbar, _super);
    function ClassicNavbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.toggle = function () {
            _this.setState({ isActive: !_this.state.isActive });
        };
        return _this;
    }
    ClassicNavbar.prototype.render = function () {
        var brand = this.props.brand;
        var isActive = this.state.isActive;
        return (React.createElement(Navbar.Menu, null, "ok"));
    };
    return ClassicNavbar;
}(React.Component));
exports.default = ClassicNavbar;
