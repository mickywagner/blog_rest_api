"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireWildcard(require("express"));

var _passport = _interopRequireDefault(require("passport"));

require("../passport");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var router = _express["default"].Router();

router.get('/', function (req, res) {
  res.redirect('/api');
});
router.post('/login', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _passport["default"].authenticate('login', /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, user, info) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;

                        if (!(err || !user)) {
                          _context2.next = 4;
                          break;
                        }

                        console.log(err);
                        return _context2.abrupt("return", res.status(400).send({
                          message: 'Incorrect username or password'
                        }));

                      case 4:
                        req.login(user, {
                          session: false
                        }, /*#__PURE__*/function () {
                          var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error) {
                            var userForToken, token;
                            return _regenerator["default"].wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!error) {
                                      _context.next = 2;
                                      break;
                                    }

                                    return _context.abrupt("return", next(error));

                                  case 2:
                                    userForToken = {
                                      id: user._id,
                                      username: user.username
                                    };
                                    token = _jsonwebtoken["default"].sign(userForToken, process.env.ACCESS_TOKEN_SECRET, {
                                      expiresIn: '1d'
                                    });
                                    res.cookie('token', token, {
                                      httpOnly: true
                                    });
                                    return _context.abrupt("return", res.json({
                                      message: 'Login successful',
                                      token: token,
                                      userForToken: userForToken
                                    }));

                                  case 6:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x7) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                        _context2.next = 10;
                        break;

                      case 7:
                        _context2.prev = 7;
                        _context2.t0 = _context2["catch"](0);
                        return _context2.abrupt("return", next(_context2.t0));

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 7]]);
              }));

              return function (_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
              };
            }())(req, res, next);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
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
var _default = router;
exports["default"] = _default;