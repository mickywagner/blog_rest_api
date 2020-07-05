'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Schema = _mongoose2.default.Schema;

var UserSchema = new Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

UserSchema.pre('save', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(next) {
        var user, hash;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        user = this;
                        _context.next = 3;
                        return _bcryptjs2.default.hash(this.password, 10);

                    case 3:
                        hash = _context.sent;

                        this.password = hash;
                        next();

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}());

UserSchema.methods.isValidPassword = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(password) {
        var user, compare;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        user = this;
                        _context2.next = 3;
                        return _bcryptjs2.default.compare(password, user.password);

                    case 3:
                        compare = _context2.sent;
                        return _context2.abrupt('return', compare);

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function (_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var User = _mongoose2.default.model('User', UserSchema);

exports.default = User;
//# sourceMappingURL=User.js.map