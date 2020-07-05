"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _User = _interopRequireDefault(require("./models/User"));

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

_passport["default"].use(new JwtStrategy(opts, function (jwt_payload, done) {
  _User["default"].findOne({
    _id: jwt_payload.id
  }, function (err, user) {
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

_passport["default"].use('login', new _passportLocal["default"]({
  usernameField: 'email',
  passwordField: 'password'
}, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, password, done) {
    var user, validate;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].findOne({
              email: email
            });

          case 3:
            user = _context.sent;

            if (user) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", done(null, false, {
              message: 'User not found'
            }));

          case 6:
            _context.next = 8;
            return user.isValidPassword(password);

          case 8:
            validate = _context.sent;

            if (validate) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", done(null, false, {
              message: 'Incorrect password'
            }));

          case 11:
            return _context.abrupt("return", done(null, user, {
              message: 'Login successful'
            }));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", done(_context.t0));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()));