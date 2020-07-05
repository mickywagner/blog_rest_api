'use strict';

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _User = require('./models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {};
opts.jwtFromRequest = function cookieExtractor(req) {
    var token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;

_passport2.default.use(new JwtStrategy(opts, function (jwt_payload, done) {
    _User2.default.findOne({ _id: jwt_payload.id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));

_passport2.default.use('login', new _passportLocal2.default({
    usernameField: 'email',
    passwordField: 'password'
}, function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password, done) {
        var user, validate;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _User2.default.findOne({ email: email });

                    case 3:
                        user = _context.sent;

                        if (user) {
                            _context.next = 6;
                            break;
                        }

                        return _context.abrupt('return', done(null, false, { message: 'User not found' }));

                    case 6:
                        _context.next = 8;
                        return user.isValidPassword(password);

                    case 8:
                        validate = _context.sent;

                        if (validate) {
                            _context.next = 11;
                            break;
                        }

                        return _context.abrupt('return', done(null, false, { message: 'Incorrect password' }));

                    case 11:
                        return _context.abrupt('return', done(null, user, { message: 'Login successful' }));

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', done(_context.t0));

                    case 17:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[0, 14]]);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}()));
//# sourceMappingURL=passport.js.map