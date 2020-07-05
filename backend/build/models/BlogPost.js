'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var BlogPostSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    timestamp: { type: Date, required: true },
    text: { type: String, required: true },
    isPublished: { type: Boolean, default: false },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 }
});

BlogPostSchema.virtual('date').get(function () {
    var date = (0, _moment2.default)(this.timestamp).format('LL');
    return date;
});

BlogPostSchema.set('toJSON', { virtuals: true });

var BlogPost = _mongoose2.default.model('BlogPost', BlogPostSchema);

exports.default = BlogPost;
//# sourceMappingURL=BlogPost.js.map