'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

require('../passport');

var _blogPostController = require('../controllers/blogPostController');

var _blogPostController2 = _interopRequireDefault(_blogPostController);

var _commentController = require('../controllers/commentController');

var _commentController2 = _interopRequireDefault(_commentController);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var verifyToken = _passport2.default.authenticate('jwt', { session: false });

// BLOT POST ROUTES

router.get('/posts', _blogPostController2.default.posts_list);

router.get('/posts/:postId', _blogPostController2.default.posts_details);

// BLOG POST - PROTECTED ROUTES -- work

router.post('/posts', verifyToken, _blogPostController2.default.posts_create_post);

router.put('/posts/:postId', verifyToken, _blogPostController2.default.posts_edit_put);

router.put('/posts/:postId/likes', _blogPostController2.default.posts_put_like);
router.put('/posts/:postId/dislikes', _blogPostController2.default.posts_put_dislike);

router.delete('/posts/:postId', verifyToken, _blogPostController2.default.posts_delete_delete);

// COMMENT ROUTES

router.get('/comments', _commentController2.default.all_comments);

router.get('/posts/:postId/comments', _commentController2.default.comments_list);

router.post('/posts/:postId/comments', _commentController2.default.comments_create_post);

router.get('/posts/:postId/comments/:commentId', _commentController2.default.comment_details);

// COMMENT PROTECTED ROUTES -- work
router.put('/posts/:postId/comments/:commentId', verifyToken, _commentController2.default.comments_edit_put);

router.delete('/posts/:postId/comments/:commentId', verifyToken, _commentController2.default.comments_delete_delete);

// USER ROUTES -- work

router.get('/users', _userController2.default.user_list);

router.get('/users/:userId', verifyToken, _userController2.default.user_details);

router.post('/users', verifyToken, _userController2.default.user_create_post);

router.put('/users/:userId', verifyToken, _userController2.default.user_edit_put);

router.delete('/users/:userId', verifyToken, _userController2.default.user_delete_delete);

exports.default = router;
//# sourceMappingURL=api.js.map