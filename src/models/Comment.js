import mongoose from 'mongoose'

const Schema = mongoose.Schema

const CommentSchema = new Schema(
    {
        name: {type: String, required: true}
        text: {type: String, required: true},
        timestamp: {type: Date, required: true}
    }
)

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment