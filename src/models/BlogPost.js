import mongoose, { Types } from 'mongoose'

const Schema = mongoose.Schema

const BlogPostSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        timestamp: {type: Date, required: true},
        text: { type: String, required: true},
        isPublished: {type: Boolean, default: false},
        comments: [{type:Schema.Types.ObjectId, ref: "Comments"}],
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0}
    }
)

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

export default BlogPost