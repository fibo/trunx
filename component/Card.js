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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classnames = require("classnames");
var React = require("react");
var CardContent = (function (_super) {
    __extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        return (React.createElement("div", { className: "card-content" }, this.props.children));
    };
    return CardContent;
}(React.Component));
var CardFooterItem = (function (_super) {
    __extends(CardFooterItem, _super);
    function CardFooterItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooterItem.prototype.render = function () {
        var href = this.props.href;
        if (href) {
            return (React.createElement("a", { className: "card-footer-item", href: href }, this.props.children));
        }
        else {
            return (React.createElement("div", { className: "card-footer-item" }, this.props.children));
        }
    };
    return CardFooterItem;
}(React.Component));
var CardFooter = (function (_super) {
    __extends(CardFooter, _super);
    function CardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooter.prototype.render = function () {
        return (React.createElement("footer", { className: "card-footer" }, this.props.children));
    };
    CardFooter.Item = CardFooterItem;
    return CardFooter;
}(React.Component));
var CardHeaderIcon = (function (_super) {
    __extends(CardHeaderIcon, _super);
    function CardHeaderIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderIcon.prototype.render = function () {
        var _a = this.props, href = _a.href, props = __rest(_a, ["href"]);
        if (href) {
            return (React.createElement("a", __assign({ className: "card-header-icon", href: href }, props), this.props.children));
        }
        else {
            return (React.createElement("div", __assign({ className: "card-header-icon" }, props), this.props.children));
        }
    };
    return CardHeaderIcon;
}(React.Component));
var CardHeaderTitle = (function (_super) {
    __extends(CardHeaderTitle, _super);
    function CardHeaderTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderTitle.prototype.render = function () {
        var isCentered = this.props.isCentered;
        var className = classnames("card-header-title", {
            "is-centered": isCentered,
        });
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return CardHeaderTitle;
}(React.Component));
var CardHeader = (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        return (React.createElement("header", { className: "card-header" }, this.props.children));
    };
    CardHeader.Icon = CardHeaderIcon;
    CardHeader.Title = CardHeaderTitle;
    return CardHeader;
}(React.Component));
var CardImage = (function (_super) {
    __extends(CardImage, _super);
    function CardImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardImage.prototype.render = function () {
        return (React.createElement("div", { className: "card-image" }, this.props.children));
    };
    return CardImage;
}(React.Component));
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: "card" }, this.props.children));
    };
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    Card.Header = CardHeader;
    Card.Image = CardImage;
    return Card;
}(React.Component));
exports.default = Card;
