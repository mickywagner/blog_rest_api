import express from 'express'
const router = express.Router()

import passport from 'passport'
import '../passport'

const verifyToken = passport.authenticate('jwt', {session: false})

import blogPostController from '../controllers/blogPostController'
import commentController from '../controllers/commentController'
import userController from '../controllers/userController'

// BLOT POST ROUTES

router.get('/posts', blogPostController.posts_list)

router.get('/posts/:postId', blogPostController.posts_details)

// BLOG POST - PROTECTED ROUTES -- work

router.post('/posts', verifyToken, blogPostController.posts_create_post)

router.put('/posts/:postId',  verifyToken, blogPostController.posts_edit_put)

router.delete('/posts/:postId', verifyToken, blogPostController.posts_delete_delete)


// COMMENT ROUTES

router.get('/posts/:postId/comments', commentController.comments_list)

router.post('/posts/:postId/comments', commentController.comments_create_post)

router.get('/posts/:postId/comments/:commentId', commentController.comment_details)

// COMMENT PROTECTED ROUTES -- work
router.put('/posts/:postId/comments/:commentId', verifyToken, commentController.comments_edit_put)

router.delete('/posts/:postId/comments/:commentId', verifyToken, commentController.comments_delete_delete)


// USER ROUTES -- work

router.get('/users', userController.user_list)

router.get('/users/:userId', verifyToken, userController.user_details)

router.post('/users', verifyToken, userController.user_create_post)

router.put('/users/:userId', verifyToken, userController.user_edit_put)

router.delete('/users/:userId', verifyToken, userController.user_delete_delete)



export default router