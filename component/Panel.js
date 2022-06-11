Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var PanelBlock = (function (_super) {
    tslib_1.__extends(PanelBlock, _super);
    function PanelBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PanelBlock.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PanelBlock.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, isActive = _a.isActive, props = tslib_1.__rest(_a, ["fallbackUI", "isActive"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('a', props, classNames_1.bulmaClassName.panelBlock, { isActive: isActive });
    };
    return PanelBlock;
}(React.Component));
var PanelHeading = (function (_super) {
    tslib_1.__extends(PanelHeading, _super);
    function PanelHeading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PanelHeading.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PanelHeading.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('p', props, classNames_1.bulmaClassName.panelHeading);
    };
    return PanelHeading;
}(React.Component));
var PanelIcon = (function (_super) {
    tslib_1.__extends(PanelIcon, _super);
    function PanelIcon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PanelIcon.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PanelIcon.prototype.render = function () {
        if (this.state.hasError) {
            return null;
        }
        return (0, renderElement_1.renderElement)('span', this.props, classNames_1.bulmaClassName.panelIcon);
    };
    return PanelIcon;
}(React.Component));
var PanelTabs = (function (_super) {
    tslib_1.__extends(PanelTabs, _super);
    function PanelTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    PanelTabs.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    PanelTabs.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('p', props, classNames_1.bulmaClassName.panelTabs);
    };
    return PanelTabs;
}(React.Component));
var Panel = (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Panel.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Panel.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return (0, renderElement_1.renderElement)('nav', props, classNames_1.bulmaClassName.panel);
    };
    Panel.Block = PanelBlock;
    Panel.Heading = PanelHeading;
    Panel.Icon = PanelIcon;
    Panel.Tabs = PanelTabs;
    return Panel;
}(React.Component));
exports.Panel = Panel;
