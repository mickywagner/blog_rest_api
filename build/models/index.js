"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

require("dotenv/config");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _BlogPost = _interopRequireDefault(require("./BlogPost"));

var _User = _interopRequireDefault(require("./User"));

var connectDb = function connectDb() {
  return _mongoose["default"].connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

exports.connectDb = connectDb;
var models = {
  Comment: _Comment["default"],
  BlogPost: _BlogPost["default"],
  User: _User["default"]
};
var _default = models;
exports["default"] = _default;