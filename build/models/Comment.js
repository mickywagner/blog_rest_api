"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var CommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'BlogPost'
  }
});

var Comment = _mongoose["default"].model('Comment', CommentSchema);

var _default = Comment;
exports["default"] = _default;