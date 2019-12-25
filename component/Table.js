Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const TableContainer = (function (_super) {
  tslib_1.__extends(TableContainer, _super)
  function TableContainer () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  TableContainer.prototype.render = function () {
    return (React.createElement('div', { className: 'table-container' }, this.props.children))
  }
  return TableContainer
}(React.Component))
const Table = (function (_super) {
  tslib_1.__extends(Table, _super)
  function Table () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Table.prototype.render = function () {
    const _a = this.props; const children = _a.children; const isBordered = _a.isBordered; const isFullwidth = _a.isFullwidth; const isHoverable = _a.isHoverable; const isNarrow = _a.isNarrow; const isStriped = _a.isStriped; const props = tslib_1.__rest(_a, ['children', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isStriped'])
    const className = classnames('table', {
      'is-bordered': isBordered,
      'is-fullwidth': isFullwidth,
      'is-hoverable': isHoverable,
      'is-narrow': isNarrow,
      'is-striped': isStriped
    })
    return (React.createElement('table', tslib_1.__assign({}, props, { className: className }), children))
  }
  Table.Container = TableContainer
  return Table
}(React.Component))
exports.default = Table
