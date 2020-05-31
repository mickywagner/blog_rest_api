import BlogPost from '../models/BlogPost'
import Comment from '../models/Comment'

// posts/postId/comments
exports.comments_list = (req, res, next) => {
    Comment.find({post: req.params.postId})
           .populate('post')
           .exec(function(err, comments) {
               if(err) { return next(err)}
               if(comments.lenght < 1) {
                   return res.send('No comments on this post')
               }
               return res.send(Object.values(comments))
           }) 
}

exports.comments_create_post = (req, res, next) => {
    res.send('POST request create new comment')
}

exports.comment_details = (req, res, next) => {
    Comment.find({_id: req.params.commentId})
           .populate('post')
           .exec(function(err, comment) {
               if(err) { return next(err)}
               return res.send(comment)
           })
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