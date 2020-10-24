Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var classNames_1 = require("./classNames");
var renderElement_1 = require("./renderElement");
var PanelBlock = (function (_super) {
    tslib_1.__extends(PanelBlock, _super);
    function PanelBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBlock.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, props = tslib_1.__rest(_a, ["isActive"]);
        return renderElement_1.renderElement('a', props, classNames_1.bulmaClassName.panelBlock, { isActive: isActive });
    };
    return PanelBlock;
}(React.Component));
var PanelHeading = (function (_super) {
    tslib_1.__extends(PanelHeading, _super);
    function PanelHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelHeading.prototype.render = function () {
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.panelHeading);
    };
    return PanelHeading;
}(React.Component));
var PanelIcon = (function (_super) {
    tslib_1.__extends(PanelIcon, _super);
    function PanelIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelIcon.prototype.render = function () {
        return renderElement_1.renderElement('span', this.props, classNames_1.bulmaClassName.panelIcon);
    };
    return PanelIcon;
}(React.Component));
var PanelTabs = (function (_super) {
    tslib_1.__extends(PanelTabs, _super);
    function PanelTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelTabs.prototype.render = function () {
        return renderElement_1.renderElement('p', this.props, classNames_1.bulmaClassName.panelTabs);
    };
    return PanelTabs;
}(React.Component));
var Panel = (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        return renderElement_1.renderElement('nav', this.props, classNames_1.bulmaClassName.panel);
    };
    Panel.Block = PanelBlock;
    Panel.Heading = PanelHeading;
    Panel.Icon = PanelIcon;
    Panel.Tabs = PanelTabs;
    return Panel;
}(React.Component));
exports.Panel = Panel;
