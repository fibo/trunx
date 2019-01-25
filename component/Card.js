Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Anchor_1 = require("./Anchor");
var modifiers_1 = require("./modifiers");
var Image_1 = require("./Image");
var CardContent = (function (_super) {
    tslib_1.__extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var className = classnames("card-content", modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("div", { className: className }, this.props.children));
    };
    return CardContent;
}(React.Component));
var CardFooterItem = (function (_super) {
    tslib_1.__extends(CardFooterItem, _super);
    function CardFooterItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooterItem.prototype.render = function () {
        var _a = this.props, AnchorComponent = _a.AnchorComponent, href = _a.href, hrefProp = _a.hrefProp, props = tslib_1.__rest(_a, ["AnchorComponent", "href", "hrefProp"]);
        var className = "card-footer-item";
        if (href) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({ AnchorComponent: AnchorComponent, className: className, href: href, hrefProp: hrefProp }, props), this.props.children));
        }
        else {
            return (React.createElement("div", { className: className }, this.props.children));
        }
    };
    return CardFooterItem;
}(React.Component));
var CardFooter = (function (_super) {
    tslib_1.__extends(CardFooter, _super);
    function CardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooter.prototype.render = function () {
        var className = classnames("card-footer", modifiers_1.textColorHelpersPropsToClassenames(this.props));
        return (React.createElement("footer", { className: className }, this.props.children));
    };
    CardFooter.Item = CardFooterItem;
    return CardFooter;
}(React.Component));
var CardHeaderIcon = (function (_super) {
    tslib_1.__extends(CardHeaderIcon, _super);
    function CardHeaderIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderIcon.prototype.render = function () {
        var _a = this.props, href = _a.href, props = tslib_1.__rest(_a, ["href"]);
        var className = "card-header-icon";
        if (href) {
            return (React.createElement("a", tslib_1.__assign({ className: className, href: href }, props), this.props.children));
        }
        else {
            return (React.createElement("div", tslib_1.__assign({ className: className }, props), this.props.children));
        }
    };
    return CardHeaderIcon;
}(React.Component));
var CardHeaderTitle = (function (_super) {
    tslib_1.__extends(CardHeaderTitle, _super);
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
    tslib_1.__extends(CardHeader, _super);
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
    tslib_1.__extends(CardImage, _super);
    function CardImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardImage.prototype.render = function () {
        return (React.createElement("div", { className: "card-image" },
            React.createElement(Image_1.default, tslib_1.__assign({}, this.props))));
    };
    return CardImage;
}(React.Component));
var Card = (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var className = "card";
        return (React.createElement("div", { className: className }, this.props.children));
    };
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    Card.Header = CardHeader;
    Card.Image = CardImage;
    return Card;
}(React.Component));
exports.default = Card;
