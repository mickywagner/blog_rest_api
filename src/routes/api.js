import express from 'express'
const router = express.Router()

import blogPostController from '../controllers/blogPostController'

// BLOT POST ROUTES

router.get('/posts', blogPostController.posts_list)

router.get('/posts/:id', blogPostController.posts_details)

router.get('/posts/create', blogPostController.posts_create_get)

router.post('/posts/create', blogPostController.posts_create_post)

router.get('/posts/:id/edit', blogPostController.posts_edit_get)

router.put('/posts/:id/edit', blogPostController.posts_edit_put)

router.get('/posts/:id/delete', blogPostController.posts_delete_get)

router.delete('/posts/:id/delete', blogPostController.posts_delete_delete)

export default router