'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('next-routes-with-locale/node_modules/next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _index = require('next-routes-with-locale/node_modules/next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function (_NextRouter) {
  (0, _inherits3.default)(Router, _NextRouter);

  function Router() {
    (0, _classCallCheck3.default)(this, Router);
    return (0, _possibleConstructorReturn3.default)(this, (Router.__proto__ || (0, _getPrototypeOf2.default)(Router)).apply(this, arguments));
  }

  (0, _createClass3.default)(Router, [{
    key: 'change',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(method, _url, _as, options) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Router.lastAs = _as;
                (0, _get3.default)(Router.prototype.__proto__ || (0, _getPrototypeOf2.default)(Router.prototype), 'change', this).call(this, method, _url, _as, options);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function change(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: 'urlIsNew',
    value: function urlIsNew(pathname, query) {
      return (0, _get3.default)(Router.prototype.__proto__ || (0, _getPrototypeOf2.default)(Router.prototype), 'urlIsNew', this).call(this, pathname, query) || Router.lastAs !== this.asPath;
    }
  }]);
  return Router;
}(_index2.default);

exports.default = Router;