Object.defineProperty(exports, '__esModule', { value: true })
const tslib_1 = require('tslib')
const classnames = require('classnames')
const React = require('react')
const PaginationEllipsis = (function (_super) {
  tslib_1.__extends(PaginationEllipsis, _super)
  function PaginationEllipsis () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PaginationEllipsis.prototype.render = function () {
    return (React.createElement('li', null,
      React.createElement('span', { className: 'pagination-ellipsis' }, '\u2026')))
  }
  return PaginationEllipsis
}(React.Component))
const PaginationLink = (function (_super) {
  tslib_1.__extends(PaginationLink, _super)
  function PaginationLink () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PaginationLink.prototype.render = function () {
    const _a = this.props; const isCurrent = _a.isCurrent; const props = tslib_1.__rest(_a, ['isCurrent'])
    const className = classnames('pagination-link', {
      'is-current': isCurrent
    })
    return (React.createElement('li', null,
      React.createElement('a', tslib_1.__assign({ className: className }, props), this.props.children)))
  }
  return PaginationLink
}(React.Component))
const PaginationList = (function (_super) {
  tslib_1.__extends(PaginationList, _super)
  function PaginationList () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PaginationList.prototype.render = function () {
    return (React.createElement('ul', { className: 'pagination-list' }, this.props.children))
  }
  return PaginationList
}(React.Component))
const PaginationNext = (function (_super) {
  tslib_1.__extends(PaginationNext, _super)
  function PaginationNext () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PaginationNext.prototype.render = function () {
    return (React.createElement('a', { className: 'pagination-next' }, this.props.children))
  }
  return PaginationNext
}(React.Component))
const PaginationPrevious = (function (_super) {
  tslib_1.__extends(PaginationPrevious, _super)
  function PaginationPrevious () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  PaginationPrevious.prototype.render = function () {
    return (React.createElement('a', { className: 'pagination-previous' }, this.props.children))
  }
  return PaginationPrevious
}(React.Component))
const Pagination = (function (_super) {
  tslib_1.__extends(Pagination, _super)
  function Pagination () {
    return _super !== null && _super.apply(this, arguments) || this
  }
  Pagination.prototype.render = function () {
    return (React.createElement('nav', { 'aria-label': 'pagination', className: 'pagination', role: 'navigation' }, this.props.children))
  }
  Pagination.Ellipsis = PaginationEllipsis
  Pagination.Link = PaginationLink
  Pagination.List = PaginationList
  Pagination.Next = PaginationNext
  Pagination.Previous = PaginationPrevious
  return Pagination
}(React.Component))
exports.default = Pagination
