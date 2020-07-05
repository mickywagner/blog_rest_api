'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CommentSchema = new Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, required: true },
    post: { type: Schema.Types.ObjectId, required: true, ref: 'BlogPost' }
});

var Comment = _mongoose2.default.model('Comment', CommentSchema);

exports.default = Comment;
//# sourceMappingURL=Comment.js.map