var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Navbar_1 = require("./Navbar");
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
        var _a = this.props, brand = _a.brand, isFixedTop = _a.isFixedTop;
        var isActive = this.state.isActive;
        return (React.createElement(Navbar_1.default, { "aria-label": "main navigation", isFixedTop: isFixedTop },
            React.createElement(Navbar_1.default.Brand, null,
                brand && brand(),
                React.createElement(Navbar_1.default.Burger, { isActive: isActive, onClick: this.toggle })),
            React.createElement(Navbar_1.default.Menu, { isActive: isActive }, this.props.children)));
    };
    return ClassicNavbar;
}(React.Component));
exports.default = ClassicNavbar;
