import Base from 'magnet-core/dist/base';
/**
 * Inspired by https://github.com/hapijs/boom
 * TODO:
 * - Create custom error
 * - Unauthorized can set header
 * - Hide >= 500
 */
import camelCase from 'lodash/camelcase';

const statusCode = {
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

export default class Respond extends Base {
  async setup() {
    this.app.application.use(async function respondMiddleware(ctx, next) {
      let respond = {};

      for (const code of Object.keys(statusCode)) {
        respond[`http${code}`] = (message) => {
          ctx.status = parseInt(code, 10);
          ctx.body = message || statusCode[code];
        };

        respond[camelCase(statusCode[code])] = (message) => {
          ctx.status = parseInt(code, 10);
          ctx.body = message || statusCode[code];
        };
      }
      Object.assign(ctx, { respond });

      await next();
    });
  }
}
