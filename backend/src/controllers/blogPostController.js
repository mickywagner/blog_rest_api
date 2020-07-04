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
               return res.json(post)
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
        return res.status(200).json(editedBlog.toJSON())
    })
}

exports.posts_put_like = (req, res, next) => {
    BlogPost.findByIdAndUpdate({_id: req.params.postId}, {likes: req.body.likes}, function(err, result) {
        if(err) return next(err)
        return res.json({message: 'Like updated!'})
    })
}

exports.posts_put_dislike = (req, res, next) => {
    BlogPost.findByIdAndUpdate({_id: req.params.postId}, {dislikes: req.body.dislikes}, function(err, result) {
        if(err) return next(err)
        return res.json({message: 'Dislikes updated!'})
    })
}

exports.posts_delete_delete = (req, res, next) => {
    Comment.find().deleteMany({post: req.params.postId}, function(err) {
        if(err) {return next(err)}
        console.log('comments deleted')
    })
    BlogPost.findByIdAndDelete(req.params.postId, function deletePost(err) {
        if(err) {return next(err)}
        return res.json({message: `Blog Post ${req.params.postId} was deleted`})
    })
            
}

