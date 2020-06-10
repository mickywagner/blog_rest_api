import mongoose, { Types } from 'mongoose'
import moment from 'moment'

const Schema = mongoose.Schema

const BlogPostSchema = new Schema(
    {
        title: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        timestamp: {type: Date, required: true},
        text: { type: String, required: true},
        isPublished: {type: Boolean, default: false},
        comments: [{type:Schema.Types.ObjectId, ref: "Comment"}],
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0}
    }
)

BlogPostSchema
    .virtual('date')
    .get(function() {
        let date = moment(this.timestamp).format('LL')
        return date
    })

BlogPostSchema.set('toJSON', {virtuals: true})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

export default BlogPost