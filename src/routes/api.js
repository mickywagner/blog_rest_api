import express from 'express'
const router = express.Router()

import blogPostController from '../controllers/blogPostController'
import commentController from '../controllers/commentController'
import userController from '../controllers/userController'

// BLOT POST ROUTES

router.get('/posts', blogPostController.posts_list)

router.post('/posts', blogPostController.posts_create_post)

router.get('/posts/:id', blogPostController.posts_details)

router.put('/posts/:id', blogPostController.posts_edit_put)

router.delete('/posts/:id', blogPostController.posts_delete_delete)

// router.get('/posts', blogPostController.posts_create_get)
// router.get('/posts/:id', blogPostController.posts_edit_get)
// router.get('/posts/:id', blogPostController.posts_delete_get)


// COMMENT ROUTES

router.get('/posts/:postId/comments', commentController.comments_list)

router.post('/posts/:postId/comments', commentController.comments_create_post)

router.get('/posts/:postId/comments/:commentId', commentController.comment_details)

router.put('/posts/:postId/comments/:commentId', commentController.comments_edit_put)

router.delete('/posts/:postId/comments/:commentId', commentController.comments_delete_delete)

// router.get('/posts/:postId/comments', commentController.comments_create_get)
// router.get('/posts/:postId/comments/:id', commentController.comments_edit_get)
// router.get('/posts/:postId/comments/:commentId', commentController.comments_delete_get)



// USER ROUTES

router.get('/users', userController.user_list)

router.post('/users', userController.user_create_post)

router.get('/users/:userId', userController.user_details)

router.put('/users/:userId', userController.user_edit_put)

router.delete('/users/:userId', userController.user_delete_delete)

// router.get('/users', userController.user_create_get)
// router.get('/users/:userId', userController.user_edit_get)
// router.get('/users/:userId', userController.user_delete_get)


export default router