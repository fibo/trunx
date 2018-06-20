Object.defineProperty(exports, "__esModule", { value: true });
var classname = require("classname");
var React = require("react");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.render = function () {
        var isActive = this.props.isActive;
        var className = classname(['modal'], {
            'is-active': isActive,
        });
        return (React.createElement("div", { className: className },
            React.createElement("div", { className: "modal-background" }),
            "this.props.children"));
    };
    return Modal;
}(React.Component));
exports.default = Modal;
