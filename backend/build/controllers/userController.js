'use strict';

require('dotenv/config');

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.user_list = function (req, res, next) {
    _User2.default.find().exec(function (err, users) {
        if (err) {
            return next(err);
        }
        return res.status(200).send(Object.values(users));
    });
};

exports.user_create_post = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var emailExists, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _User2.default.findOne({ email: req.body.email });

                    case 2:
                        emailExists = _context.sent;

                        if (!emailExists) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).send({ message: 'Email already in use' }));

                    case 5:
                        _context.next = 7;
                        return new _User2.default({
                            email: req.body.email,
                            username: req.body.username,
                            password: req.body.password
                        });

                    case 7:
                        user = _context.sent;


                        user.save(function (err, user) {
                            if (err) return next(err);
                            return res.send(user);
                        });

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

exports.user_details = function (req, res, next) {
    _User2.default.findById(req.params.userId, function (err, user) {
        if (err) return res.status(400).send({ message: 'User does not exist' });
        return res.status(200).send(user);
    });
};

exports.user_edit_put = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var editedUser;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        editedUser = new _User2.default({
                            _id: req.params.userId,
                            username: req.body.username,
                            email: req.body.email
                        });

                        if (!req.body.password) {
                            _context2.next = 5;
                            break;
                        }

                        _context2.next = 4;
                        return _bcryptjs2.default.hash(req.body.password, 10);

                    case 4:
                        editedUser.password = _context2.sent;

                    case 5:

                        _User2.default.findByIdAndUpdate(req.params.userId, editedUser, {}, function (err, theuser) {
                            if (err) {
                                return next(err);
                            }
                            return res.status(200).send('User edited successful');
                        });

                    case 6:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}();

exports.user_delete_delete = function (req, res, next) {
    _User2.default.findByIdAndDelete(req.params.userId, function (err, user) {
        if (err) return next(err);
        res.status(200).send({ message: user + ' was deleted' });
    });
};
//# sourceMappingURL=userController.js.map