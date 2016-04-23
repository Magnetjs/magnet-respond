'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('magnet-core/dist/base');

var _base2 = _interopRequireDefault(_base);

var _camelcase = require('lodash/camelcase');

var _camelcase2 = _interopRequireDefault(_camelcase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Inspired by https://github.com/hapijs/boom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * TODO:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Create custom error
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Unauthorized can set header
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - Hide >= 500
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var statusCode = {
  100: 'Continue',
  101: 'Switching Protocols',
  102: 'Processing',
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Moved Temporarily',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  307: 'Temporary Redirect',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Time-out',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request-URI Too Large',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I\'m a teapot',
  422: 'Unprocessable Entity',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Unordered Collection',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Time-out',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  509: 'Bandwidth Limit Exceeded',
  510: 'Not Extended',
  511: 'Network Authentication Required'
};

var Respond = function (_Base) {
  _inherits(Respond, _Base);

  function Respond() {
    _classCallCheck(this, Respond);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Respond).apply(this, arguments));
  }

  _createClass(Respond, [{
    key: 'setup',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.app.application.use(function () {
                  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
                    var respond, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            respond = {};
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;

                            _loop = function _loop() {
                              var code = _step.value;

                              respond['http' + code] = function (message) {
                                ctx.status = parseInt(code, 10);
                                ctx.body = message || statusCode[code];
                              };

                              respond[(0, _camelcase2.default)(statusCode[code])] = function (message) {
                                ctx.status = parseInt(code, 10);
                                ctx.body = message || statusCode[code];
                              };
                            };

                            for (_iterator = Object.keys(statusCode)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                              _loop();
                            }

                            _context.next = 13;
                            break;

                          case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                          case 13:
                            _context.prev = 13;
                            _context.prev = 14;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                              _iterator.return();
                            }

                          case 16:
                            _context.prev = 16;

                            if (!_didIteratorError) {
                              _context.next = 19;
                              break;
                            }

                            throw _iteratorError;

                          case 19:
                            return _context.finish(16);

                          case 20:
                            return _context.finish(13);

                          case 21:
                            respond.image = function (filename, body) {
                              ctx.type = 'image/' + filename.split('.').pop();
                              ctx.body = body;
                            };

                            Object.assign(ctx, { respond: respond });

                            _context.next = 25;
                            return next();

                          case 25:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee, this, [[4, 9, 13, 21], [14,, 16, 20]]);
                  }));

                  function respondMiddleware(_x, _x2) {
                    return ref.apply(this, arguments);
                  }

                  return respondMiddleware;
                }());

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setup() {
        return ref.apply(this, arguments);
      }

      return setup;
    }()
  }]);

  return Respond;
}(_base2.default);

exports.default = Respond;