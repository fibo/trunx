Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const PanelBlock = (function (_super) {
  tslib_1.__extends(PanelBlock, _super)
  function PanelBlock () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PanelBlock.prototype.render = function () {
    const isActive = this.props.isActive
    const className = classnames('panel-block', {
      'is-active': isActive
    })
    return (React.createElement('a', { className: className }, this.props.children))
  }
  return PanelBlock
}(React.Component))
const PanelHeading = (function (_super) {
  tslib_1.__extends(PanelHeading, _super)
  function PanelHeading () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PanelHeading.prototype.render = function () {
    return (React.createElement('p', { className: 'panel-heading' }, this.props.children))
  }
  return PanelHeading
}(React.Component))
const PanelIcon = (function (_super) {
  tslib_1.__extends(PanelIcon, _super)
  function PanelIcon () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PanelIcon.prototype.render = function () {
    return (React.createElement('span', { className: 'panel-icon' }, this.props.children))
  }
  return PanelIcon
}(React.Component))
const PanelTabs = (function (_super) {
  tslib_1.__extends(PanelTabs, _super)
  function PanelTabs () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PanelTabs.prototype.render = function () {
    return (React.createElement('p', { className: 'panel-tabs' }, this.props.children))
  }
  return PanelTabs
}(React.Component))
const Panel = (function (_super) {
  tslib_1.__extends(Panel, _super)
  function Panel () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Panel.prototype.render = function () {
    return (React.createElement('nav', { className: 'panel' }, this.props.children))
  }
  Panel.Block = PanelBlock
  Panel.Heading = PanelHeading
  Panel.Icon = PanelIcon
  Panel.Tabs = PanelTabs
  return Panel
}(React.Component))
exports.default = Panel
