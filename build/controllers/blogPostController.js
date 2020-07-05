"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _BlogPost = _interopRequireDefault(require("../models/BlogPost"));

var _Comment = _interopRequireDefault(require("../models/Comment"));

var _User = _interopRequireDefault(require("../models/User"));

exports.posts_list = function (req, res, next) {
  _BlogPost["default"].find().populate('author').exec(function (err, posts) {
    if (err) {
      return next(err);
    }

    return res.json(posts);
  });
};

exports.posts_create_post = function (req, res, next) {
  var blog = new _BlogPost["default"]({
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
  _BlogPost["default"].find({
    _id: req.params.postId
  }).populate('author').populate('comments').exec(function (err, post) {
    if (err) return next(err);
    return res.json(post);
  });
};

exports.posts_edit_put = function (req, res, next) {
  var editedBlog = new _BlogPost["default"]({
    _id: req.params.postId,
    title: req.body.title,
    text: req.body.text,
    isPublished: req.body.isPublished,
    likes: req.body.likes,
    dislikes: req.body.dislikes
  });

  _BlogPost["default"].findByIdAndUpdate(req.params.postId, editedBlog, {}, function (err, thepost) {
    if (err) {
      return next(err);
    }

    return res.status(200).json(editedBlog.toJSON());
  });
};

exports.posts_put_like = function (req, res, next) {
  _BlogPost["default"].findByIdAndUpdate({
    _id: req.params.postId
  }, {
    likes: req.body.likes
  }, function (err, result) {
    if (err) return next(err);
    return res.json({
      message: 'Like updated!'
    });
  });
};

exports.posts_put_dislike = function (req, res, next) {
  _BlogPost["default"].findByIdAndUpdate({
    _id: req.params.postId
  }, {
    dislikes: req.body.dislikes
  }, function (err, result) {
    if (err) return next(err);
    return res.json({
      message: 'Dislikes updated!'
    });
  });
};

exports.posts_delete_delete = function (req, res, next) {
  _Comment["default"].find().deleteMany({
    post: req.params.postId
  }, function (err) {
    if (err) {
      return next(err);
    }

    console.log('comments deleted');
  });

  _BlogPost["default"].findByIdAndDelete(req.params.postId, function deletePost(err) {
    if (err) {
      return next(err);
    }

    return res.json({
      message: "Blog Post ".concat(req.params.postId, " was deleted")
    });
  });
};