import BlogPost from '../models/BlogPost'
import Comment from '../models/Comment'
import User from '../models/User'

// /comments

exports.all_comments = (req, res, next) => {
    Comment.find()
           .populate('post')
           .exec(function(err, comments) {
               if(err) { return next(err) }
               return res.json(comments)
           })
}

// posts/postId/comments
exports.comments_list = (req, res, next) => {
    Comment.find({post: req.params.postId})
           .exec(function(err, comments) {
               if(err) { return next(err)}
               if(comments.length < 1) {
                   return res.send('No comments on this post')
               }
               return res.send(Object.values(comments))
           }) 
}

exports.comments_create_post = (req, res, next) => {
    const comment = new Comment(
        {
            name: req.body.name,
            text: req.body.text,
            timestamp: Date.now(),
            post: req.params.postId
        }
    )

    BlogPost.findById(req.params.postId).exec(function(err, thepost) {
        if(err) {return next(err)}
        console.log(thepost)
        comment.save(function(err) {
            if (err) {return next(err)}
            console.log(`${comment.name} posted a comment`)
            thepost.comments.push(comment._id)
            thepost.save()
            return res.send(comment)
        })

    })

    
}

exports.comment_details = (req, res, next) => {
    Comment.find({_id: req.params.commentId})
           .populate('post')
           .exec(function(err, comment) {
               if(err) { return next(err)}
               return res.send(comment)
           })
}

exports.comments_edit_put = (req, res, next) => {
    const editComment = new Comment(
        {
            _id: req.params.commentId,
            name: req.body.name,
            text: req.body.text,
        }
    )

    Comment.findByIdAndUpdate(req.params.commentId, editComment, {}, function(err, thecomment) {
        if(err) { return next(err)}
        return res.send(thecomment)
    })
}

exports.comments_delete_delete = (req, res, next) => {
    Comment.findByIdAndDelete(req.params.commentId, function deleteComment(err) {
        if(err) { return next(err)}
        return res.send(`Comment ${req.params.commentId} was deleted`)
    })


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