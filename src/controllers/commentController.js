import { BlogPost, Comments } from '../models'

exports.comments_list = (req, res) => {
    res.send('GET request view all coments on post')
}

exports.comments_create_post = (req, res) => {
    res.send('POST request create new comment')
}

exports.comment_details = (req, res) => {
    res.send(`GET request view api/posts/:postId/comments/${req.param.id}`)
}

exports.comments_edit_put = (req, res) => {
    res.send(`PUT request to edit a api/posts/:postId/comments/${req.param.id}`)
}

exports.comments_delete_delete = (req, res) => {
    res.send(`DELETE request to api/posts/:postId/comments/${req.param.id}`)
}

// exports.comments_create_get = (req, res) => {
//     res.send('GET request to create new comment')
// }

// exports.comments_edit_get = (req, res) => {
//     res.send('GET request to edit a comment')
// }

// exports.comments_delete_get = (req, res) => {
//     res.send('GET request to delete comment')
// }