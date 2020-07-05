'use strict';

var _BlogPost = require('../models/BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

var _Comment = require('../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// /comments

exports.all_comments = function (req, res, next) {
    _Comment2.default.find().populate('post').exec(function (err, comments) {
        if (err) {
            return next(err);
        }
        return res.json(comments);
    });
};

// posts/postId/comments
exports.comments_list = function (req, res, next) {
    _Comment2.default.find({ post: req.params.postId }).exec(function (err, comments) {
        if (err) {
            return next(err);
        }
        if (comments.length < 1) {
            return res.send('No comments on this post');
        }
        return res.send(Object.values(comments));
    });
};

exports.comments_create_post = function (req, res, next) {
    var comment = new _Comment2.default({
        name: req.body.name,
        text: req.body.text,
        timestamp: Date.now(),
        post: req.params.postId
    });

    _BlogPost2.default.findById(req.params.postId).exec(function (err, thepost) {
        if (err) {
            return next(err);
        }
        console.log(thepost);
        comment.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log(comment.name + ' posted a comment');
            thepost.comments.push(comment._id);
            thepost.save();
            return res.send(comment);
        });
    });
};

exports.comment_details = function (req, res, next) {
    _Comment2.default.find({ _id: req.params.commentId }).populate('post').exec(function (err, comment) {
        if (err) {
            return next(err);
        }
        return res.send(comment);
    });
};

exports.comments_edit_put = function (req, res, next) {
    _Comment2.default.findByIdAndUpdate({ _id: req.params.commentId }, { name: req.body.name, text: req.body.text }, function (err, thecomment) {
        if (err) {
            return next(err);
        }
        return res.status(200).json(thecomment.toJSON());
    });
};

exports.comments_delete_delete = function (req, res, next) {
    _Comment2.default.findByIdAndDelete(req.params.commentId, function deleteComment(err) {
        if (err) {
            return next(err);
        }
        return res.json({ message: 'Comment ' + req.params.commentId + ' was deleted' });
    });
};

// exports.comments_create_get = (req, res) => {
//     res.send('GET request to create new comment')
// }

// exports.comments_edit_get = (req, res) => {
//     res.send('GET request to edit a comment')
// }

// exports.comments_delete_get = (req, res) => {
//     res.send('GET request to delete comment')
// }
//# sourceMappingURL=commentController.js.map