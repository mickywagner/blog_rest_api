import BlogPost from '../models/BlogPost'
import Comment from '../models/Comment'
import User from '../models/User'

exports.posts_list = (req, res, next) => {
    BlogPost.find()
            .populate('author')
            .exec(function(err, posts) {
        if(err) { return next(err)}
        return res.json(posts)
    })
    
}

exports.posts_create_post = (req, res, next) => {
    const blog = new BlogPost(
        {
            title: req.body.title,
            author: req.user._id,
            timestamp: Date.now(),
            text: req.body.text,
            isPublished: req.body.isPublished
        }
    )
    blog.save()

    return res.send(blog.toJSON())
}

exports.posts_details = (req, res, next) => {
   BlogPost.find({_id: req.params.postId}) 
           .populate('author')
           .populate('comments')
           .exec(function(err, post) {
               if(err) return next(err)
               return res.send(post)
           })
}

exports.posts_edit_put = (req, res, next) => {
    const editedBlog = new BlogPost(
        {
            _id: req.params.postId,
            title: req.body.title,
            text: req.body.text,
            isPublished: req.body.isPublished,
            likes: req.body.likes,
            dislikes: req.body.dislikes

        }
    )
    
    BlogPost.findByIdAndUpdate(req.params.postId, editedBlog, {}, function(err, thepost) {
        if(err) { return next(err)}
        return res.send(thepost)
    })
}

exports.posts_delete_delete = (req, res, next) => {
    Comment.find().deleteMany({post: req.params.postId}, function(err) {
        if(err) {return next(err)}
        console.log('comments deleted')
    })
    BlogPost.findByIdAndDelete(req.params.postId, function deletePost(err) {
        if(err) {return next(err)}
        return res.send(`Blog Post ${req.params.postId} was deleted`)
    })
            
}

