Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var Image_1 = require("./Image");
var classNames_1 = require("./classNames");
var modifiers_1 = require("./modifiers");
var renderElement_1 = require("./renderElement");
var CardContent = (function (_super) {
    tslib_1.__extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.cardContent, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return CardContent;
}(React.Component));
var CardFooterItem = (function (_super) {
    tslib_1.__extends(CardFooterItem, _super);
    function CardFooterItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooterItem.prototype.render = function () {
        var _a = this.props, href = _a.href, onClick = _a.onClick, props = tslib_1.__rest(_a, ["href", "onClick"]);
        if (href || onClick) {
            return renderElement_1.renderElement('a', tslib_1.__assign({ href: href, onClick: onClick }, props), classNames_1.bulmaClassName.cardFooterItem);
        }
        else {
            return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.cardFooterItem);
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
        return renderElement_1.renderElement('footer', this.props, classNames_1.bulmaClassName.cardFooter);
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
        var _a = this.props, href = _a.href, onClick = _a.onClick, props = tslib_1.__rest(_a, ["href", "onClick"]);
        if (href || onClick) {
            return renderElement_1.renderElement('a', tslib_1.__assign({ href: href, onClick: onClick }, props), classNames_1.bulmaClassName.cardHeaderIcon);
        }
        else {
            return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.cardHeaderIcon);
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
        var _a = this.props, isCentered = _a.isCentered, props = tslib_1.__rest(_a, ["isCentered"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.cardHeaderTitle, { isCentered: isCentered });
    };
    return CardHeaderTitle;
}(React.Component));
var CardHeader = (function (_super) {
    tslib_1.__extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        return renderElement_1.renderElement('header', this.props, classNames_1.bulmaClassName.cardHeader);
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
        return (React.createElement("div", { className: classnames(classNames_1.bulmaClassName.cardImage, className) },
            React.createElement(Image_1.Image, tslib_1.__assign({}, props))));
    };
    return CardImage;
}(React.Component));
var Card = (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.card);
    };
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    Card.Header = CardHeader;
    Card.Image = CardImage;
    return Card;
}(React.Component));
exports.Card = Card;
