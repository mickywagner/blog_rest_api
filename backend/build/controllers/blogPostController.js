'use strict';

var _BlogPost = require('../models/BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

var _Comment = require('../models/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _User = require('../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.posts_list = function (req, res, next) {
    _BlogPost2.default.find().populate('author').exec(function (err, posts) {
        if (err) {
            return next(err);
        }
        return res.json(posts);
    });
};

exports.posts_create_post = function (req, res, next) {
    var blog = new _BlogPost2.default({
        title: req.body.title,
        author: req.user._id,
        timestamp: Date.now(),
        text: req.body.text,
        isPublished: req.body.isPublished
    });
    blog.save();

    return res.send(blog.toJSON());
};

exports.posts_details = function (req, res, next) {
    _BlogPost2.default.find({ _id: req.params.postId }).populate('author').populate('comments').exec(function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
};

exports.posts_edit_put = function (req, res, next) {
    var editedBlog = new _BlogPost2.default({
        _id: req.params.postId,
        title: req.body.title,
        text: req.body.text,
        isPublished: req.body.isPublished,
        likes: req.body.likes,
        dislikes: req.body.dislikes

    });

    _BlogPost2.default.findByIdAndUpdate(req.params.postId, editedBlog, {}, function (err, thepost) {
        if (err) {
            return next(err);
        }
        return res.status(200).json(editedBlog.toJSON());
    });
};

exports.posts_put_like = function (req, res, next) {
    _BlogPost2.default.findByIdAndUpdate({ _id: req.params.postId }, { likes: req.body.likes }, function (err, result) {
        if (err) return next(err);
        return res.json({ message: 'Like updated!' });
    });
};

exports.posts_put_dislike = function (req, res, next) {
    _BlogPost2.default.findByIdAndUpdate({ _id: req.params.postId }, { dislikes: req.body.dislikes }, function (err, result) {
        if (err) return next(err);
        return res.json({ message: 'Dislikes updated!' });
    });
};

exports.posts_delete_delete = function (req, res, next) {
    _Comment2.default.find().deleteMany({ post: req.params.postId }, function (err) {
        if (err) {
            return next(err);
        }
        console.log('comments deleted');
    });
    _BlogPost2.default.findByIdAndDelete(req.params.postId, function deletePost(err) {
        if (err) {
            return next(err);
        }
        return res.json({ message: 'Blog Post ' + req.params.postId + ' was deleted' });
    });
};
//# sourceMappingURL=blogPostController.js.map