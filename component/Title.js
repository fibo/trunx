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
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var Title = (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Title.prototype.render = function () {
        var _a = this.props, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6, isSpaced = _a.isSpaced;
        var className = classnames("title", {
            "is-1": is1,
            "is-2": is2,
            "is-3": is3,
            "is-4": is4,
            "is-5": is5,
            "is-6": is6,
            "is-spaced": isSpaced,
        }, modifiers_1.textColorHelpersPropsToClassenames(this.props));
        if (is1) {
            return (React.createElement("h1", { className: className }, this.props.children));
        }
        else if (is2) {
            return (React.createElement("h2", { className: className }, this.props.children));
        }
        else if (is3) {
            return (React.createElement("h3", { className: className }, this.props.children));
        }
        else if (is4) {
            return (React.createElement("h4", { className: className }, this.props.children));
        }
        else if (is5) {
            return (React.createElement("h5", { className: className }, this.props.children));
        }
        else if (is6) {
            return (React.createElement("h6", { className: className }, this.props.children));
        }
        else {
            return (React.createElement("p", { className: className }, this.props.children));
        }
    };
    return Title;
}(React.Component));
exports.default = Title;
