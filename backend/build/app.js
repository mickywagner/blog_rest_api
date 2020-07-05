'use strict';

require('dotenv/config');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _models = require('./models');

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use((0, _cors2.default)());
app.use((0, _cookieParser2.default)());
_mongoose2.default.set('useFindAndModify', false);

app.use('/', _index2.default);
app.use('/api', _api2.default);

(0, _models.connectDb)().then(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    app.listen(process.env.PORT, function () {
                        console.log('App listening on port ' + process.env.PORT);
                    });

                case 1:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));
//# sourceMappingURL=app.js.map