"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv/config");

var _User = _interopRequireDefault(require("../models/User"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

exports.user_list = function (req, res, next) {
  _User["default"].find().exec(function (err, users) {
    if (err) {
      return next(err);
    }

    return res.status(200).send(Object.values(users));
  });
};

exports.user_create_post = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var emailExists, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 2:
            emailExists = _context.sent;

            if (!emailExists) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              message: 'Email already in use'
            }));

          case 5:
            _context.next = 7;
            return new _User["default"]({
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
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.user_details = function (req, res, next) {
  _User["default"].findById(req.params.userId, function (err, user) {
    if (err) return res.status(400).send({
      message: 'User does not exist'
    });
    return res.status(200).send(user);
  });
};

exports.user_edit_put = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var editedUser;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            editedUser = new _User["default"]({
              _id: req.params.userId,
              username: req.body.username,
              email: req.body.email
            });

            if (!req.body.password) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return _bcryptjs["default"].hash(req.body.password, 10);

          case 4:
            editedUser.password = _context2.sent;

          case 5:
            _User["default"].findByIdAndUpdate(req.params.userId, editedUser, {}, function (err, theuser) {
              if (err) {
                return next(err);
              }

              return res.status(200).send("User edited successful");
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.user_delete_delete = function (req, res, next) {
  _User["default"].findByIdAndDelete(req.params.userId, function (err, user) {
    if (err) return next(err);
    res.status(200).send({
      message: "".concat(user, " was deleted")
    });
  });
};