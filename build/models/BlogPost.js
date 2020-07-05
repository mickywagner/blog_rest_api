"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _moment = _interopRequireDefault(require("moment"));

var Schema = _mongoose["default"].Schema;
var BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  isPublished: {
    type: Boolean,
    "default": false
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  likes: {
    type: Number,
    "default": 0
  },
  dislikes: {
    type: Number,
    "default": 0
  }
});
BlogPostSchema.virtual('date').get(function () {
  var date = (0, _moment["default"])(this.timestamp).format('LL');
  return date;
});
BlogPostSchema.set('toJSON', {
  virtuals: true
});

var BlogPost = _mongoose["default"].model('BlogPost', BlogPostSchema);

var _default = BlogPost;
exports["default"] = _default;