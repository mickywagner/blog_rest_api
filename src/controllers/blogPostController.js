import BlogPost from '../models/BlogPost'

exports.posts_list = (req, res, next) => {
    BlogPost.find()
            .populate('author')
            .exec(function(err, posts) {
        if(err) { return next(err)}
        return res.send(Object.values(posts))
    })
    
}

exports.posts_create_post = (req, res) => {
    res.send(`POST request blog posts resource`)
}

exports.posts_details = (req, res) => {
    BlogPost.find({_id: req.params.id})
            .populate('author')
            .exec(function(err, post) {
                if(err) { return next(err)}
                return res.send(Object.values(post))
            })
}

exports.posts_edit_put = (req, res) => {
    res.send(`PUT request to edit blog post at post/${req.params.id}`)
}

exports.posts_delete_delete = (req, res) => {
    res.send(`DELETE request to posts/${req.params.id}`)
}


// exports.posts_create_get = (req, res) => {
//     res.send('GET request for creating a new blog post')
// }

// exports.posts_edit_get = (req, res) => {
//     res.send('GET request to edit a blog post')
// }

// exports.posts_delete_get = (req, res) => {
//     res.send('GET request to delete blog post')
// }