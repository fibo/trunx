Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var commonRenders_1 = require("./commonRenders");
var Anchor_1 = require("./Anchor");
var modifiers_1 = require("./modifiers");
var Image_1 = require("./Image");
var CardContent = (function (_super) {
    tslib_1.__extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), textColorHelpersProps = _a[0].textColorHelpersProps, _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("card-content", className, modifiers_1.textColorHelpersPropsToClassnames(textColorHelpersProps)) }, props), children));
    };
    return CardContent;
}(React.Component));
var CardFooterItem = (function (_super) {
    tslib_1.__extends(CardFooterItem, _super);
    function CardFooterItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooterItem.prototype.render = function () {
        var _a = this.props, classNameProp = _a.className, children = _a.children, download = _a.download, href = _a.href, onClick = _a.onClick, target = _a.target, props = tslib_1.__rest(_a, ["className", "children", "download", "href", "onClick", "target"]);
        var className = classnames("card-footer-item", classNameProp);
        if (href || onClick) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({ className: className, download: download, href: href, onClick: onClick, target: target }, props), children));
        }
        else {
            return (React.createElement("div", tslib_1.__assign({ className: className }, props), children));
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
        var _a = modifiers_1.extractModifiersProps(this.props), textColorHelpersProps = _a[0].textColorHelpersProps, _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("footer", tslib_1.__assign({ className: classnames("card-footer", className, modifiers_1.textColorHelpersPropsToClassnames(textColorHelpersProps)) }, props), children));
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
        var _a = this.props, children = _a.children, classNameProp = _a.className, download = _a.download, href = _a.href, onClick = _a.onClick, target = _a.target, props = tslib_1.__rest(_a, ["children", "className", "download", "href", "onClick", "target"]);
        var className = classnames("card-header-icon", classNameProp);
        if (href || onClick) {
            return (React.createElement(Anchor_1.Anchor, tslib_1.__assign({}, props, { className: className, download: download, href: href, onClick: onClick, target: target }), children));
        }
        else {
            return (React.createElement("div", tslib_1.__assign({}, props, { className: className }), children));
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
        var _a = this.props, children = _a.children, className = _a.className, isCentered = _a.isCentered, props = tslib_1.__rest(_a, ["children", "className", "isCentered"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames("card-header-title", className, {
                "is-centered": isCentered,
            }) }, props), children));
    };
    return CardHeaderTitle;
}(React.Component));
var CardHeader = (function (_super) {
    tslib_1.__extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        return commonRenders_1.renderHeader(this.props, "card-header");
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
        var _a = this.props, className = _a.className, props = tslib_1.__rest(_a, ["className"]);
        return (React.createElement("div", { className: classnames("card-image", className) },
            React.createElement(Image_1.default, tslib_1.__assign({}, props))));
    };
    return CardImage;
}(React.Component));
var Card = (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
        return (React.createElement("div", { className: classnames("card", className, modifiers_1.backgroundColorHelpersPropsToClassnames(props)) }, children));
    };
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    Card.Header = CardHeader;
    Card.Image = CardImage;
    return Card;
}(React.Component));
exports.default = Card;
