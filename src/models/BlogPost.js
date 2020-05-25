import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema

const BlogPostSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        timestamp: {type: Date, required: true},
        isPublished: {type: Boolean, default: false},
        comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }
)

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

export default BlogPost