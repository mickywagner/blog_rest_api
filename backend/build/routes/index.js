'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

require('../passport');

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.redirect('/api');
});

router.post('/login', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _passport2.default.authenticate('login', function () {
                            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(err, user, info) {
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                _context2.prev = 0;

                                                if (!(err || !user)) {
                                                    _context2.next = 4;
                                                    break;
                                                }

                                                console.log(err);
                                                return _context2.abrupt('return', res.status(400).send({ message: 'Incorrect username or password' }));

                                            case 4:
                                                req.login(user, { session: false }, function () {
                                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
                                                        var userForToken, token;
                                                        return regeneratorRuntime.wrap(function _callee$(_context) {
                                                            while (1) {
                                                                switch (_context.prev = _context.next) {
                                                                    case 0:
                                                                        if (!error) {
                                                                            _context.next = 2;
                                                                            break;
                                                                        }

                                                                        return _context.abrupt('return', next(error));

                                                                    case 2:
                                                                        userForToken = { id: user._id, username: user.username };
                                                                        token = _jsonwebtoken2.default.sign(userForToken, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });

                                                                        res.cookie('token', token, { httpOnly: true });
                                                                        return _context.abrupt('return', res.json({ message: 'Login successful', token: token, userForToken: userForToken }));

                                                                    case 6:
                                                                    case 'end':
                                                                        return _context.stop();
                                                                }
                                                            }
                                                        }, _callee, undefined);
                                                    }));

                                                    return function (_x7) {
                                                        return _ref3.apply(this, arguments);
                                                    };
                                                }());
                                                _context2.next = 10;
                                                break;

                                            case 7:
                                                _context2.prev = 7;
                                                _context2.t0 = _context2['catch'](0);
                                                return _context2.abrupt('return', next(_context2.t0));

                                            case 10:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, undefined, [[0, 7]]);
                            }));

                            return function (_x4, _x5, _x6) {
                                return _ref2.apply(this, arguments);
                            };
                        }())(req, res, next);

                    case 1:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

router.get('/logout', function (req, res) {
    req.logout();
    res.clearCookie('token');
    return res.send('Log out successful');
});

exports.default = router;
//# sourceMappingURL=index.js.map