"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

require("../passport");

var _blogPostController = _interopRequireDefault(require("../controllers/blogPostController"));

var _commentController = _interopRequireDefault(require("../controllers/commentController"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var router = _express["default"].Router();

var verifyToken = _passport["default"].authenticate('jwt', {
  session: false
});

// BLOT POST ROUTES
router.get('/posts', _blogPostController["default"].posts_list);
router.get('/posts/:postId', _blogPostController["default"].posts_details); // BLOG POST - PROTECTED ROUTES -- work

router.post('/posts', verifyToken, _blogPostController["default"].posts_create_post);
router.put('/posts/:postId', verifyToken, _blogPostController["default"].posts_edit_put);
router.put('/posts/:postId/likes', _blogPostController["default"].posts_put_like);
router.put('/posts/:postId/dislikes', _blogPostController["default"].posts_put_dislike);
router["delete"]('/posts/:postId', verifyToken, _blogPostController["default"].posts_delete_delete); // COMMENT ROUTES

router.get('/comments', _commentController["default"].all_comments);
router.get('/posts/:postId/comments', _commentController["default"].comments_list);
router.post('/posts/:postId/comments', _commentController["default"].comments_create_post);
router.get('/posts/:postId/comments/:commentId', _commentController["default"].comment_details); // COMMENT PROTECTED ROUTES -- work

router.put('/posts/:postId/comments/:commentId', verifyToken, _commentController["default"].comments_edit_put);
router["delete"]('/posts/:postId/comments/:commentId', verifyToken, _commentController["default"].comments_delete_delete); // USER ROUTES -- work

router.get('/users', _userController["default"].user_list);
router.get('/users/:userId', verifyToken, _userController["default"].user_details);
router.post('/users', verifyToken, _userController["default"].user_create_post);
router.put('/users/:userId', verifyToken, _userController["default"].user_edit_put);
router["delete"]('/users/:userId', verifyToken, _userController["default"].user_delete_delete);
var _default = router;
exports["default"] = _default;