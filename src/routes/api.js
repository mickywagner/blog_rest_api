import express from 'express'
const router = express.Router()

import blogPostController from '../controllers/blogPostController'
import commentController from '../controllers/commentController'
import userController from '../controllers/userController'

// BLOT POST ROUTES

router.get('/posts', blogPostController.posts_list)

router.get('/posts/:id', blogPostController.posts_details)

router.get('/posts/create', blogPostController.posts_create_get)

router.post('/posts/create', blogPostController.posts_create_post)

router.get('/posts/:id/edit', blogPostController.posts_edit_get)

router.put('/posts/:id/edit', blogPostController.posts_edit_put)

router.get('/posts/:id/delete', blogPostController.posts_delete_get)

router.delete('/posts/:id/delete', blogPostController.posts_delete_delete)

// COMMENT ROUTES

router.get('/posts/:postId/comments', commentController.comments_list)

router.get('/posts/:postId/comments/:commentId', commentController.comment_details)

router.get('/posts/:postId/comments/create', commentController.comments_create_get)

router.post('/posts/:postId/comments/create', commentController.comments_create_post)

router.get('/posts/:postId/comments/:id/edit', commentController.comments_edit_get)

router.put('/posts/:postId/comments/:id/edit', commentController.comments_edit_put)

router.get('/posts/:postId/comments/:commentId/delete', commentController.comments_delete_get)

router.delete('/posts/:postId/comments/:commentId/delete', commentController.comments_delete_delete)

// USER ROUTES

router.get('/users/:userId', userController.user_details)

router.get('/users/create', userController.user_create_get)

router.post('/users/create', userController.user_create_post)

router.get('/users/:userId/edit', userController.user_edit_get)

router.put('/users/:userId/edit', userController.user_edit_put)

router.get('/users/:userId/delete', userController.user_delete_get)

router.delete('/users/:userId/delete', userController.user_delete_delete)

export default router