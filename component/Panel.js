Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var PanelBlock = (function (_super) {
    tslib_1.__extends(PanelBlock, _super);
    function PanelBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelBlock.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, isActive = _a.isActive;
        return (React.createElement("a", { className: classnames("panel-block", className, {
                "is-active": isActive,
            }) }, children));
    };
    return PanelBlock;
}(React.Component));
var PanelHeading = (function (_super) {
    tslib_1.__extends(PanelHeading, _super);
    function PanelHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelHeading.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("p", { className: classnames("panel-heading", className) }, children));
    };
    return PanelHeading;
}(React.Component));
var PanelIcon = (function (_super) {
    tslib_1.__extends(PanelIcon, _super);
    function PanelIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelIcon.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("span", { className: classnames("panel-icon", className) }, children));
    };
    return PanelIcon;
}(React.Component));
var PanelTabs = (function (_super) {
    tslib_1.__extends(PanelTabs, _super);
    function PanelTabs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelTabs.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("p", { className: classnames("panel-tabs", className) }, children));
    };
    return PanelTabs;
}(React.Component));
var Panel = (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        return (React.createElement("nav", { className: classnames("panel", className) }, children));
    };
    Panel.Block = PanelBlock;
    Panel.Heading = PanelHeading;
    Panel.Icon = PanelIcon;
    Panel.Tabs = PanelTabs;
    return Panel;
}(React.Component));
exports.default = Panel;
