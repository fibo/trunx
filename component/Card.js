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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardContent.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardContent.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = modifiers_1.extractModifiersProps(this.props), modifiersProps = _a[0], _b = _a[1], children = _b.children, className = _b.className, props = tslib_1.__rest(_b, ["children", "className"]);
        return (React.createElement("div", tslib_1.__assign({ className: classnames(classNames_1.bulmaClassName.cardContent, className, modifiers_1.modifierPropsToClassnamesObject(modifiersProps)) }, props), children));
    };
    return CardContent;
}(React.Component));
var CardFooterItem = (function (_super) {
    tslib_1.__extends(CardFooterItem, _super);
    function CardFooterItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardFooterItem.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardFooterItem.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardFooter.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardFooter.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('footer', this.props, classNames_1.bulmaClassName.cardFooter);
    };
    CardFooter.Item = CardFooterItem;
    return CardFooter;
}(React.Component));
var CardHeaderIcon = (function (_super) {
    tslib_1.__extends(CardHeaderIcon, _super);
    function CardHeaderIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardHeaderIcon.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardHeaderIcon.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardHeaderTitle.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardHeaderTitle.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, isCentered = _a.isCentered, props = tslib_1.__rest(_a, ["isCentered"]);
        return renderElement_1.renderElement('div', props, classNames_1.bulmaClassName.cardHeaderTitle, {
            isCentered: isCentered,
        });
    };
    return CardHeaderTitle;
}(React.Component));
var CardHeader = (function (_super) {
    tslib_1.__extends(CardHeader, _super);
    function CardHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardHeader.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardHeader.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('header', this.props, classNames_1.bulmaClassName.cardHeader);
    };
    CardHeader.Icon = CardHeaderIcon;
    CardHeader.Title = CardHeaderTitle;
    return CardHeader;
}(React.Component));
var CardImage = (function (_super) {
    tslib_1.__extends(CardImage, _super);
    function CardImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    CardImage.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    CardImage.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        var _a = this.props, className = _a.className, props = tslib_1.__rest(_a, ["className"]);
        return (React.createElement("div", { className: classnames(classNames_1.bulmaClassName.cardImage, className) },
            React.createElement(Image_1.Image, tslib_1.__assign({}, props))));
    };
    return CardImage;
}(React.Component));
var Card = (function (_super) {
    tslib_1.__extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Card.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Card.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return renderElement_1.renderElement('div', this.props, classNames_1.bulmaClassName.card);
    };
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    Card.Header = CardHeader;
    Card.Image = CardImage;
    return Card;
}(React.Component));
exports.Card = Card;
